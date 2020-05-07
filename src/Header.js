import React, { Component } from 'react';
import './scss/style.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTextList: [
                'Web Developer',
                'Dreamer',
                'Creative',
            ],
            headerTextPos: 0,
            headerText: '',
            headerTextDel: false,
        };
    }

    changeText = () => {
        const {headerTextList, headerTextPos, headerText, headerTextDel} = this.state;
        const fullText = headerTextList[headerTextPos];

        this.setState({
            headerText: !headerTextDel ? fullText.substring(0, headerText.length + 1) : fullText.substring(0, headerText.length - 1),
        });

        if(! headerTextDel && headerText === fullText) {
            this.setState({
                headerTextDel: headerText !== ''?true:false,
            });
        }

        if(headerTextDel && headerText === '') {
            this.setState({
                headerTextPos: headerTextPos < headerTextList.length - 1 ? headerTextPos + 1 : 0,
                headerTextDel: false,
            });
        }

        setTimeout(this.changeText, headerText===fullText && !headerTextDel?3000:180);
    }

    mouseMove = () => {
        let header = document.getElementById('header')
        header.addEventListener('mousemove', this.parallax);
      }
    
      parallax = (e) => {
        let elm = document.getElementById('header-parallax');
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let x = e.clientX;
        let y = e.clientY;
        let depthX = (x-w)*0.09;
        let depthY = (y-h)*0.09;
        let depthZ = Math.abs(depthX) + Math.abs(depthY);
        let deg = depthZ * 0.35;
    
        elm.style.transform = `translate3d(${depthX}px, ${depthY}px, 0) rotate3d(${depthX}, ${depthY}, 0, ${deg}deg)`;    
      }

    componentDidMount() {
        this.changeText();
        this.mouseMove();
    }

  render() {
    return (
        <header id="header" className="header scroll scroll-1">
            <div className="header-top"></div>

            <div className="header-title">
                <div id="header-parallax" className="box">
                    <div class="face front">
                        <div className="name">
                            <h1>WISNU NUGROHO</h1>
                        </div>
                        <div className="name-changed">
                            <span>I AM</span><span className="changed-text">{this.state.headerText}</span><div className="blink"></div>
                        </div>
                        <span>SIMPLE BUT PERFECT</span> 
                    </div>
                    <div class="face back"></div>
                    <div class="face right"></div>
                    <div class="face left"></div>
                    <div class="face top"></div>
                    <div class="face bottom"></div>
                </div>
            </div>  

            <div className="scroll-icon-wrapper">
                <span className="scroll-icon">
                    <span className="scroll-icon-outer">
                    <span className="scroll-icon-inner"></span>
                    </span>
                </span>
            </div>
        </header>
    );
  }
}

export default Header;