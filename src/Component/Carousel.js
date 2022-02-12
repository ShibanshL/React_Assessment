import React, { Component } from 'react'
import './Carousel.css'
import { Animate } from './Carousel_Animation.js'

export default class Carousel extends Component {

componentDidMount(){
Animate()
// Animate2()
}
  render() {
    return (
    <div className="Carousel">
        <div className="Images">
            <div className="I1">
                <img src="./Resources/R1.png" alt=""/>

            </div>
            <div className="I2">
                <img src="./Resources/R2.png" alt=""/>

            </div>
            <div className="I3">
                <img src="./Resources/R3.png" alt=""/>

            </div>
        </div>
        <div className="button">
            <div id="n1">
                <div className="sub_n1"></div>
            </div>
            <div id="n2">
                <div className="sub_n2"></div>
            </div>
            <div id="n3">
                <div className="sub_n3"></div>
            </div>
        </div>
    </div>
    )
  }
}


// function Animate(){ 
// var button1 = document.querySelector('.Carousel .button #n1 .sub_n1')
// var button2 = document.querySelector('.Carousel .button #n2 .sub_n2')
// var button3 = document.querySelector('.Carousel .button #n3 .sub_n3')
// var Image = document.querySelector('.Carousel .Images')
// // var Popup = document.querySelector('.Popup')


// // button1.onclick = ()=>{
// //     Image.style.background='pink'
// // }

// button1.onclick=()=>{
//     Image.style.marginLeft='0vw'
//     button1.style.borderRadius='25px'
//     button1.style.width='18px'

//     button2.style.width='8px'
//     button3.style.width='8px'

//     button2.style.background = 'rgba(23, 27, 36, 0.2)'
//     button3.style.background = 'rgba(23, 27, 36, 0.2)'


//     button1.style.background = '#171B24'

    
//     // button1.style.borderRadius='50%'
// }
// button2.onclick=()=>{
//     Image.style.marginLeft='-100vw'
    

//     button2.style.borderRadius='25px'
//     button2.style.width='18px'

//     button1.style.width='8px'
//     button3.style.width='8px'

//     button1.style.background = 'rgba(23, 27, 36, 0.2)'
//     button3.style.background = 'rgba(23, 27, 36, 0.2)'

//     button2.style.background = '#171B24'

// }
// button3.onclick=()=>{
//     Image.style.marginLeft='-200vw'
   

//     button3.style.borderRadius='25px'
//     button3.style.width='18px'

//     button1.style.width='8px'
//     button2.style.width='8px'

//     button1.style.background = 'rgba(23, 27, 36, 0.2)'
//     button2.style.background = 'rgba(23, 27, 36, 0.2)'

//     button3.style.background = '#171B24'

// }
// }

// Animate()

// function pop(){
//     if(screen.width>500){
//         Popup.style.display='flex'
//     }
//     else{
//         Popup.style.display='none'
//     }
// }
// window.addEventListener('load',pop)
