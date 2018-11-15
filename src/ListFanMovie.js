import React, { Component } from 'react';
import FanMovie from './FanMovie'
/* Componente que gera a lista de usuários que gostaram de determinado filme */
class ListFanMovie extends Component{
	render(){  
        let any = this.props.users.length > 0;
        return any 
          ?
          (           
            <ul>{ this.props.users.map(item => <FanMovie key={item.id} id={item.id} name={item.name}/>) }</ul>
          )  
          :
          (<div>Nobody</div>)
    }
}

export default ListFanMovie