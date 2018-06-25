import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Searchform extends Component {
 // handler for search   
    searchHandler = (e) =>{
        e.preventDefault ();
        let newsearch = '/search/' + this.search.value;
        console.log(this.props);
        
        this.props.history.push(newsearch);

    }
  
    render() { 
    return(
    <div>
        <form className="search-form" onSubmit={this.searchHandler.bind(this)}>
        <input type="search" name="search" placeholder="Search" required ref={(input) => this.search= input}/>
        <button type="submit"><i className="fa fa-search fa-2x" aria-hidden="true"></i>
</button>
        </form>
    </div>
    )
}
}
export default withRouter(Searchform);


 