import React from 'react';
import  Sticky  from 'react-sticky';

const LeftSideBar =()=>{

    return(
  
    <Sticky >{ ({style})=> <p style={style && {top:"50%" , position: "fixed", left: "-1%"} } className="sidebarRight" >get_in_touch@zackwong.com</p>}</Sticky>
    );

}

export default LeftSideBar;