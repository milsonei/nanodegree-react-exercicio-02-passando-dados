import React, { Component } from 'react';
/* Componente que mostra o nome do usuário que gosta de determinado filme*/
class FanMovie extends Component{
	render(){     
        return <li key={this.props.id}>{this.props.name}</li>
    }
}

export default FanMovie