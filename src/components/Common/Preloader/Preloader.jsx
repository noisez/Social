import React from 'react';
import loaderImg from "../../../assets/images/loader.svg";

const Preloader = () => {
    return <img src={loaderImg} alt='loader' style={ {height: '200px', width: '200px'} } className='preloader' />;
};

export default Preloader;