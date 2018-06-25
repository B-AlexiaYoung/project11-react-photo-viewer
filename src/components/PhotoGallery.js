import React from 'react';
import Pic from './Pic';
const PhotoGallery = props =>{
  const results = props;
  let pics;
  //console.log ("hi");
  if (props){
    //console.log(results.data); 
      pics = results.data.map(pic =>
        <Pic data={pic} />
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