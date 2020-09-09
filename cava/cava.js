/* Méthode principale du plugin
	Params:
	- data: objet state provenant de <plugin>.action.js
		- data.client: Le client qui a passé la règle
	- callback: lien entre plugin (toujours renvoyé en fin de méthode, interne, non utilisé)
*/
exports.action = function(data, callback){
	
	// Info console
	info("cava from: " + data.client);
	
	// Exemple d'action
	// Remplacez le speak par votre action
	Avatar.askme(Config.modules.cava.askme_question, data.client,
		Config.modules.cava.askme_answer
		,0, function (answer, end) {
		switch(answer) {
			
			case 'good':
				  Avatar.speak(Config.modules.cava.askme_repgood, data.client, function() {
					end(data.client, true);
				});

            case 'bad':
				  Avatar.speak(Config.modules.cava.askme_repbad, data.client, function() {
					end(data.client, true);
			});
		}
		});	

	// Fonction de callback
	callback();
}