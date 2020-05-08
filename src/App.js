import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHammer, faWineGlass, faArrowUp, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './scss/style.scss';

library.add(faHammer, faWineGlass, faArrowUp, faHandHoldingHeart);

class App extends Component {
  render() {
    return(
      <>
      <Header />
      <Content />
      <div className="under-construction">
          <div className="marquee">
              <span><FontAwesomeIcon icon="hammer" /> I'm still working on it</span>
          </div>
      </div>
      </>
    );
  }
}

export default App;
