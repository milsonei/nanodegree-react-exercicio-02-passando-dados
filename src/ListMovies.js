import React, { Component } from 'react';
import Movie from './Movie'
/* Componente que gera a lista de filmes */
class ListMovies extends Component{
	render(){     
        return (
          <ul>{ this.props.movies.map(item => <Movie key={item.id} id={item.id} users={item.users} name={item.name}/>) }</ul>
        )      
    }
}

export default ListMovies