import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${props => props.theme.colors.purple};
`;

/* We have pseudo selectors, before and hover*/
const Button = styled.button`
  padding: 8px 12px;
  border: 0;
  color: ${props => props.theme.colors.tan};
  background: ${props => props.theme.colors.red};
  transition: all 200ms ease;

  ::before {
    content: "🎉";
  }

  :hover {
    background: ${props => props.theme.colors.tan};
    color: ${props => props.theme.colors.red};
  }
`;

/* If the button1 have type we use the type, if doesn't have we use button as type*/
const Button1 = styled.button.attrs(props => ({
    type: props.type || "button"
  }))`
    font-family: ${({ theme }) => theme.fonts.body};
    display: inline-block;
    padding: 8px 12px;
    border: 0;
    color: ${props => props.theme.colors.purple};
    background: ${props => props.theme.colors.yellow};
    transition: all 200ms ease;
    font-size: 14px;
    text-decoration: none;
  
    :hover {
      background: ${props => props.theme.colors.purple};
      color: ${props => props.theme.colors.yellow};
    }
  `;

export default () => {
    return (
        <div>
            <Heading>Hello Styled Components with theme</Heading>
            <Button>Pseudo-selectors</Button>
            <Button as="a" href="https://google.com">
            google
            </Button>
            <Button1 type="submit">Button with type</Button1>
            <Button1>Button with default type</Button1>
        </div>
    );
}