import React from 'react';
import Pic from './Pic';

// photos to go into ul, assign pic state and props
const PhotoGallery = props =>{
  const results = props;
  let pics;
  //console.log ("hi");
  if (props){
    //console.log(results.data); 
      pics = results.data.map(pic =>
        <Pic data={pic} key={pic.id}/>
   );
  }
  
    return (
        <div className="photo-container">
        {/* <h2>Results</h2> */}
        <ul>
          {pics}
        </ul>
      </div>

    )
}
export default PhotoGallery;