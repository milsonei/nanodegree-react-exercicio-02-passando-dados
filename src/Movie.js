import React, { Component } from 'react';
import ListFanMovie from './ListFanMovie';
/* Componente que mostrar detalhes do filme e a lista de fãs */
class Movie extends Component{
	render(){     
        return <div>
            <h2>{this.props.name}</h2>
            <p>Liked By:</p>
            <ul>
                <ListFanMovie users={this.props.users}/>
            </ul>
        </div>
    }
}

export default Movie