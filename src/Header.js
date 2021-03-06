import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        this._boxOpen = false;

        this._mouseX = 0;
        this._rotateX = 0;
        this._rotateY = 0;
        this._rotateZ = 0;
        this._direction = '';

        this._inDrag = false;
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
        // if(this._inDrag) return;
        let elm = document.getElementById('header-parallax');
        let topElm = document.getElementById('top');
        // let frontElm = document.getElementById('front');
        // let leftElm = document.getElementById('left');
        // let rightElm = document.getElementById('right');
        // let shadow = document.getElementById('shadow');
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let x = e.clientX;
        let y = e.clientY;

        // translate box
        // let depthX = (x-w)*0.15;
        let depthY = (y-h)*0.25;

        // rotate box
        this._rotateX = depthY*-0.2;
        this._rotateZ = 0;

        // cardboard gradient
        // let gradient = rotateZ;

        // shadow
        // let shadowX = 20+(depthX*0.1);
        
        // scale shadow
        // let scale = Math.abs(y*100/h*0.01);
        // if(scale > 2) scale = 2;
        // if(scale < 1.3) scale = 1.3;
        elm.style.transform = `rotateX(${this._rotateX}deg) rotateY(${this._rotateY}deg)`;
        // frontElm.style.backgroundImage = `linear-gradient(${-gradient}deg, #ae8d5a, #f8cc89)`;
        topElm.style.backgroundImage = `linear-gradient(${this._rotateY}deg, #f8cc89, #ae8d5a)`;
        // leftElm.style.backgroundImage = `linear-gradient(${gradient}deg, #ae8d5a, #f8cc89)`;
        // rightElm.style.backgroundImage = `linear-gradient(${gradient}deg, #ae8d5a, #f8cc89)`;
        // shadow.style.transform = `translate3d(${shadowX}px, ${280+(-depthY)}px, 50px) rotateX(80deg) rotateY(${-rotateZ}deg) scale(${scale})`;    

    }

    openBox = () => {
        if(!this._boxOpen) {
            document.getElementById('top').classList.toggle('open');
            setTimeout(() => {
                document.getElementById('front').classList.toggle('open');
            }, 1000);
            setTimeout(() => {
                document.getElementById('right').classList.toggle('open');
            }, 1500);
            setTimeout(() => {
                document.getElementById('left').classList.toggle('open');
            }, 2000);
            setTimeout(() => {
                document.getElementById('back').classList.toggle('open');
            }, 2500);
        }
        else {
            document.getElementById('back').classList.toggle('open');
            setTimeout(() => {
                document.getElementById('left').classList.toggle('open');
            }, 500);
            setTimeout(() => {
                document.getElementById('right').classList.toggle('open');
            }, 1000);
            setTimeout(() => {
                document.getElementById('front').classList.toggle('open');
            }, 1500);
            setTimeout(() => {
                document.getElementById('top').classList.toggle('open');
            }, 2000);
        }
        this._boxOpen = !this._boxOpen;
    }

    dragScreen = () => {
        let box = document.getElementById('header');
        box.addEventListener('mousedown', this.mouseDown)
        box.addEventListener('mouseup', this.mouseUp)
    }

    mouseDown = (e) => {
        this._mouseX = e.clientX;
    }

    mouseUp = (e) => {
        let direction = e.clientX > this._mouseX ? 'right' : 'left';
        let distance = Math.abs(e.clientX-this._mouseX);
        if(distance > 200) distance = 200;
        
        if(this._mouseX === 0 || distance < 10 || this._inDrag) return;
        
        this._inDrag = true;
        this._mouseX = 0;
        this.rotate(direction, distance, this._rotateY);
    }

    rotate = (direction, distance, start) => {
        let elm = document.getElementById('header-parallax');
        let rotateY = this._rotateY;
        elm.style.transform = `rotateX(${this._rotateX}deg) rotateY(${rotateY}deg)`;
        setTimeout(() => {
            let end;
            if(direction === 'left') {
                rotateY -= 1
                if(rotateY <= -361) rotateY = 0;
                end = (start-distance) <= -360 ? -360 : start-distance;
            } else {
                rotateY += 1
                if(rotateY >= 361) rotateY = 0;
                end = (start+distance) >= 360 ? 360 : start+distance;
            }
            console.log([this._rotateY, end])
            this._rotateY = rotateY;
            if(this._rotateY !== end) this.rotate(direction, distance, start);
            else this._inDrag = false; 
        }, 5)
    }

    componentDidMount() {
        this.changeText();
        this.mouseMove();
        this.dragScreen();
        
        document.getElementById('front').addEventListener('click', this.openBox);
    }

  render() {
    return (
        <header id="header" className="header scroll scroll-1">
            <div className="header-top">
                <div className="name">
                    <h1>WISNU NUGROHO</h1>
                </div>
                <div className="name-changed">
                    <span>I AM</span><span className="changed-text">{this.state.headerText}</span><div className="blink"></div>
                </div>
                <span>SIMPLE BUT PERFECT</span> 
            </div>

            <div id="header-box" className="header-box">
                <div id="header-parallax" className="box">
                <div id="shadow" className="shadow"></div>
                    <div id="front" className="face front">
                        <span className="care"><FontAwesomeIcon icon="hand-holding-heart" /> Handle With Care</span>
                        <div className="address">
                            <div className="content">
                                <p className="store">warungpedia</p>
                                <p className="text small"><b>Nomor Invoice</b><br/>INV/202004/VIII/1258<br/><b>Penjual</b><br/>Wisnu Nugroho</p>
                                <p className="text"><b>Product</b><br/>Mystery Box - Special Edition</p>
                            </div>
                        </div>
                    </div>
                    <div id="back" className="face back"></div>
                    <div id="right" className="face right">
                        <div className="fragile">
                            <p><FontAwesomeIcon icon="wine-glass" /> Fragile</p>
                        </div>
                    </div>
                    <div id="left" className="face left">
                        <div className="fragile">
                            <p><FontAwesomeIcon icon="wine-glass" /> Fragile</p>
                        </div>
                    </div>
                    <div id="top" className="face top">
                        <span className="top-sign"><FontAwesomeIcon icon="arrow-up" /> Top</span>
                        <div className="fragile">
                            <p><FontAwesomeIcon icon="wine-glass" /> Fragile</p>
                        </div>
                    </div>
                    <div id="bottom" className="face bottom">
                        <div className="ring ring-one"></div>
                        <div className="ring ring-two"></div>
                        <div className="ring ring-three"></div>
                    </div>
                </div>
            </div>  

            <div>
                <div className="credit">WISNU - 2020</div>
            </div>

            {/* <div className="scroll-icon-wrapper">
                <span className="scroll-icon">
                    <span className="scroll-icon-outer">
                    <span className="scroll-icon-inner"></span>
                    </span>
                </span>
            </div> */}
        </header>
    );
  }
}

export default Header;