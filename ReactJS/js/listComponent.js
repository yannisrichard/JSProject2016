import React from 'react'
import { render } from 'react-dom'


// L'import suivant servait à afficher en dure un Item dans notre Liste pour tester après avoir rencontré des problèmes avec le fetch GET.
//~ import { ItemListe } from './itemListComponent.js';
//~ var ItemListe = require("./itemListComponent.js");




var Liste = React.createClass({
  getInitialState: function() {
    return {listeEpisodes: []};
  },
  componentDidMount: function() {
    fetch('http://localhost:9312/', {
    method: 'get',
    mode: 'no-cors',
	headers : {
		'Accept': 'application/json',
		'Connection': 'keep-alive'
	}
	}).then(function(response) {
		console.log(response.json());
		return response.json();
	}).then(function(tabItemEpisodeJson) {
		console.log(tabItemEpisodeJson);
		try{
			this.setState[(listeEpisodes: tabItemEpisodeJson)];
	}).bind(this)).catch(function (err) {
		console.log(err);
	});

  },
  
  render: function() {	  
    return <table id="tabEpisodes">
  		<thead>
  			<tr>
    			<th className="th__head">Id</th>
    			<th className="th__head">Serie</th> 
    			<th className="th__head">Season</th>
    			<th className="th__head">Episode</th>
    		</tr>
  		</thead>
  		<tbody>
			//Ne fonctionne pas.
			//for (var item in this.state.listeEpisodes){
			//	<td className="td__content">item</th>
			//}
  		</tbody>
  	</table>
  }
});

render(<Liste/>, document.getElementById('content'));
