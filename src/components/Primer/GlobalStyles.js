import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import movies from "./movies";

const Global = createGlobalStyle`
  body {
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: green;
  }
`;

const Movies = styled.ul`
  margin: 0;
  margin-top: 50px;
  display: grid;
  max-width: 80%;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const Movie = styled.li`
  list-style: none;
  min-height: 40px;
`;

export default () => {
  return (
    <>
      <Global />
      <div>Global styles that apply to the whole document</div>
      <Movies>
        {movies.map(({ title, rating }) => (
          <Movie>{title}</Movie>
        ))}
      </Movies>
    </>
  );
};