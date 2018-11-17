import React, { Component } from 'react';
import MovieCard from './MovieCard'
/* Componente que gera a lista de filmes */
class MovieCardsList extends Component{

	render(){   
        const {profiles, movies, users} = this.props;
        /**
         * Recupera a lista dos fãs do filme
         * @param {integer} movieId - identificador do filme
         */
        const getUsersWhoLikedMovieList = (movieId) => profiles.filter(profile => parseInt(profile.favoriteMovieID, 10) === movieId).map(profile => ({
          id:`${users[parseInt(profile.userID, 10)].userName}-${profile.userID}`,
          name : users[parseInt(profile.userID, 10)].name,
        }));

        /**
         * Recupera uma lista de todos os filmes
         */
        const getMovieCards = () => Object.keys(movies).map(key => 
            ({
              id: movies[key].id,
              name: movies[key].name,
              users: getUsersWhoLikedMovieList(movies[key].id)
            })
        );
        
        return (
          <ul>{ getMovieCards().map(item => <MovieCard key={item.id} id={item.id} users={item.users} name={item.name}/>) }</ul>
        )      
    }
}

export default MovieCardsList