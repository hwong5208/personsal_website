import React from 'react';
import  Sticky  from 'react-sticky';

const RightSideBar =()=>{

    return(
  
    <Sticky >{ ({style})=> <p style={style && {top:"50%" , position: "fixed", left: "95%"} } className="sidebarRight" >get_in_touch@zackwong.com</p>}</Sticky>
    );

}

export default RightSideBar;