import React from 'react'
import { render } from 'react-dom'


var ItemListe = React.createClass({
  render: function() {
    return <tr>
    <td className="td__content">{this.props.id}</td>
    <td className="td__content">{this.props.serie}</td>
    <td className="td__content">{this.props.season}</td>
    <td className="td__content">{this.props.episode}</td>
    </tr>;
  }
});

render(<ItemListe id="1" serie="Prison Break" season="1" episode="1" />, document.querySelector('#tabEpisodes tbody'))
