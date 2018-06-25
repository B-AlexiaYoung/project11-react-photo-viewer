import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import {fasearch } from '@fortawesome/free-solid-svg-icons';

class Searchform extends Component {
    
    searchHandler = (e) =>{
        e.preventDefault ();
        let newsearch = '/search/' + this.search.value;
        // let newsearch = this.search.value;
        console.log(this.props);
        
        this.props.history.push(newsearch);

    }
  
    render() { 
    return(
    <div>
        <form className="search-form" onSubmit={this.searchHandler.bind(this)}>
        <input type="search" name="search" placeholder="Search" required ref={(input) => this.search= input}/>
        <button type="submit" className="search-button"></button>
        </form>
    </div>
    )
}
}
export default withRouter(Searchform);


