import React from "react";
import styled from "styled-components";

// const Heading = styled.h1`
//  text-align: center;
//  font-size: ${props => (props.small ? 16 : 14)}px;
//  font-family: -apple-system, sans-serif
// `;

/* Instead of opening backticks, you open function and this function can return an object.
 In Object, it will always default to pixels, so if you want to do something else, 
 like Ems or something, you will have to type it, but it will default to pixels.*/
const Heading = styled.h1(({ small }) => ({
    textAlign: "center",
    fontSize: small ? 16 : 24,
    fontFamily: "apple-system, sans-serif",
    color: 'grey'
}));

export default () => {
    return (
        <div>
            <Heading>Heading using object-based styling</Heading>
            <Heading small>I am smaller</Heading>
        </div>
    );
}