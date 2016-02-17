import React from 'react'
import { render } from 'react-dom'

var AddForm = React.createClass({
  render: function() {
    return <form className="form" method="POST" action="">
    	<label>Série </label><input type="text" name="serie"/><br/>
    	<label>Saison </label><input type="text" name="season"/><br/>
    	<label>Episode</label><input type="text" name="episode"/><br/>
    </form>;
  }
});

render(<AddForm />, document.getElementById('formulaire'));
