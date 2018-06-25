import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery';
import apiKey from './config';
import axios from 'axios';

class Displayphotos extends Component{
  constructor(){
    super();
    this.state ={
      pics : [],
      loading: true
    };
  }
  
  componentDidMount(){
    // console.log(this.props.term);
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&safe_search=1&tags=${this.props.term}&per_page=16&format=json&nojsoncallback=1`)
    
    .then (response => {
      
      // const getPics = response.data;;
      // console.log(response.data.photos.photo);
       this.setState ({
        pics: response.data.photos.photo,
        loading: false
       });             

    })
    .catch (error => {
      console.log("error");
    })
  }
  render() { 
    
    if (this.state.loading){
      return(
        <div className ="container">
        <h2>Loading... </h2>
        </div>
      )
    }

    if(this.state.pics.length ===0){
      return(
      <div className ="container">
      <h2>No Results Found </h2>
      <p>That search did not return any results, please try again.</p>
      </div>
      )
    }
    return (
      
      <div className="container"> 
       <h2>{this.props.term} </h2>

        <PhotoGallery data={this.state.pics} />
      </div>
    );
  }
}

export default Displayphotos;
