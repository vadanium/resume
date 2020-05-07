import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHammer } from '@fortawesome/free-solid-svg-icons'

import './scss/style.scss';

library.add(faHammer);

class App extends Component {
  render() {
    return(
      <>
      <Header />
      <Content />
      </>
    );
  }
}

export default App;
