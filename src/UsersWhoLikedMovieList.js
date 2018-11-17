import React, { Component } from 'react';
import UserWhoLikedMovie from './UserWhoLikedMovie'
/* Componente que gera a lista de usuários que gostaram de determinado filme */
class UsersWhoLikedMovieList extends Component{
	render(){  
        let any = this.props.users.length > 0;
        return any 
          ?
          (           
            <ul>{ this.props.users.map(item => <UserWhoLikedMovie key={item.id} id={item.id} name={item.name}/>) }</ul>
          )  
          :
          (<div>None of the current users liked this movie.</div>)
    }
}

export default UsersWhoLikedMovieList