import React from 'react';
let url='';
let title='';


// put each photo in a li (will go inside ul)
const Pic = props =>{
    // console.log('I am in Pic!');
if(props){
    const photo = props.data;
    //console.log(photo);
    url=`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    title=photo.title;
}
 return( 
     <li>
        <img src={url} alt={title} />
    </li>
 )
}
export default Pic;