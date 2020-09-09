'use strict';

// Ce module vérifie prépare l'objet data envoyé au plugin

Object.defineProperty(exports, "__esModule", {
  value: true
});

let _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
		
		for (var rule in Config.modules.cava.rules) {
			var match = (0, _helpers.syntax)(state.sentence, Config.modules.cava.rules[rule]); 
			if (match) break;
		}
		
		// Décommentez si vous voulez rechercher une pièce dans la phrase.
		//let room = Avatar.ia.clientFromRule (state.rawSentence);
		
		setTimeout(function(){ 
			if (state.debug) info('Action cava');
			
			state.action = {
				module: 'cava',
				//room: room, // Décommentez si une pièce est dans la phrase et que vous voulez l'utiliser.
				sentence: state.sentence,
				rawSentence: state.rawSentence
			};
			resolve(state);
		}, 500);	
		
	});
};

