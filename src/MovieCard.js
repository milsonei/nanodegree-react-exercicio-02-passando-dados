import React, { Component } from 'react';
import UsersWhoLikedMovieList from './UsersWhoLikedMovieList';
/* Componente que mostrar detalhes do filme e a lista de fãs */
class MovieCard extends Component{
	render(){     
        return <div>
            <h2>{this.props.name}</h2>
            <p>Liked By:</p>
            <ul>
                <UsersWhoLikedMovieList users={this.props.users}/>
            </ul>
        </div>
    }
}

export default MovieCard