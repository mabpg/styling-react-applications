import React from "react";
import styled from "styled-components";

const people = ["Sara", "Alex", "Carolyn", "Monica", "Tomasz"];

const Person = styled.li`
  font-family: Arial, Helvetica, sans-serif;
  color: gray;

  ${props =>
    props.even &&
    `
        color: white;
        background: black;
        list-style: none;
    `}
`;

const Title = styled.h1`
    color: black;

`;

export default () => {
  return (
    <div>
      <Title>We get a list of people and give a different color and background color when their position in the list is an even number, like zebra stripes.</Title>
      {people.map((person, i) => (
        <Person even={(i + 1) % 2 === 0}>{person}</Person>
      ))}
    </div>
  );
}