import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this._pos = 0;
        this._direction = '';
        this._scrollName = 'scroll-1';
        this._scrollMax = 0;
        this._scrollingPage = false;
        this._step = 10;
        this._time = 20;
      }
    
    scroll = () => {
        let root = document.getElementById('root');
        root.addEventListener('scroll', this.scrolling);
    }

    scrolling = () => {
        if(this._scrollingPage) return;
        this._scrollingPage = true;
        let posNow = document.getElementById('root').scrollTop;
        let direction = '';

        direction = posNow > this._pos ? 'down' : 'up';
        this._direction = direction;
        
        this.scrollTo(direction);
    }

    scrollTo = (direction) => {
        let idNum = this._scrollName.replace('scroll-', '');
        let idNumNow = direction === 'down'? parseInt(idNum)+1 : parseInt(idNum)-1;
        if(idNumNow > this._scrollMax) idNumNow = this._scrollMax;
        if(idNumNow < 1) idNumNow = 1;
        this._scrollName = 'scroll-'+idNumNow;
        let to = document.querySelectorAll('.'+this._scrollName)[0].offsetTop;

        this.smoothScroll(to);
    }

    smoothScroll = (to) => {
        let root = document.getElementById('root');
        let interval = setInterval(() => {
            if(Math.ceil(root.scrollTop) !== Math.ceil(to)) {
            let destination;
            if(this._direction==='down') {
                destination = Math.ceil(root.scrollTop+root.scrollTop/this._step);
                if(destination >= to) destination = Math.ceil(to);
            }
            else {
                destination = root.scrollTop-root.scrollTop/this._step;
                if(destination <= to) destination = Math.ceil(to);
            }
            root.scrollTo(0, destination);
            } else {
            clearInterval(interval);
            this._scrollingPage = false;
            this._pos = to;
            }
        }, this._time);
    }

    checkScroll = () => {
        this._scrollMax = document.querySelectorAll('.scroll').length;
    }

    componentDidMount() {
        this.checkScroll();
        this.scroll();
    }

  render() {
    return (
        <>
        <section id="menu" className="menu scroll scroll-2">
            <div className="title">SPACE TO EXPLORE</div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            <div className="credit">WISNU - 2020</div>
      </section>
      </>
    );
  }
}

export default Content;