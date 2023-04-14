import styled from 'styled-components';
import React from 'react';
import logo from "../../assets/logo-jade_page-0001.jpg";

const ImageElement = styled.img`
    height: 180px;
    width: 216px;
    align-self: center;
`

const Logo = () => {
    return(
        <>
        <ImageElement src={logo} alt="jades-logo"/>
        </>
    )
}

export default ImageElement;

export {Logo};