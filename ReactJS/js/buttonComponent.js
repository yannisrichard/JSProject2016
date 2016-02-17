import React from 'react'
import { render } from 'react-dom'

var ButtonForm = React.createClass({
	valid: function (event) {
		
		var serie = document.querySelector("input[name=serie]").value;
		var saison = document.querySelector("input[name=season]").value;
		var episode = document.querySelector("input[name=episode]").value;
		var json = '{"serie":"'+serie+'","season":"'+saison+'","episode":"'+episode+'"}';
		
		fetch('http://localhost:9312/', {
    		method: 'post',
    		mode: 'no-cors',
    		body: json
		}).then(function(response) {
    		console.log(response);
		}).catch(function(err) { 
		
		});
	},
  render: function() {
    return <button id="bouton" onClick={this.valid}>Ajouter</button>;
  }
});


render(<ButtonForm />, document.getElementById('formulaire-button'));
