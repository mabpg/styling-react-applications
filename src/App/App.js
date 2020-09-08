import React from 'react';
import App from './App.styled.js';
import GlobalStyles from '../components/Primer/GlobalStyles.js';
import StyleOnProps from '../components/Segundo/StyleOnProps.js';
import Theme from '../components/Tercer/Theme.js';
import FourComponent from '../components/Cuarto/FourComponent.js'

export default () => {
  return (
    <App>
      <GlobalStyles />
      <StyleOnProps />
      <Theme />
      <FourComponent />
    </App>
 );
};