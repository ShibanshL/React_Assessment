export function Animate(){ 
    var button1 = document.querySelector('.Carousel .button #n1 .sub_n1')
    var button2 = document.querySelector('.Carousel .button #n2 .sub_n2')
    var button3 = document.querySelector('.Carousel .button #n3 .sub_n3')
    var Image = document.querySelector('.Carousel .Images')
    // var Popup = document.querySelector('.Popup')
    
    
    // button1.onclick = ()=>{
    //     Image.style.background='pink'
    // }
    
    button1.onclick=()=>{
        Image.style.marginLeft='200vw'
        button1.style.borderRadius='25px'
        button1.style.width='18px'
    
        button2.style.width='8px'
        button3.style.width='8px'
    
        button2.style.background = 'rgba(23, 27, 36, 0.2)'
        button3.style.background = 'rgba(23, 27, 36, 0.2)'
    
    
        button1.style.background = '#171B24'
    
        
        // button1.style.borderRadius='50%'
    }
    button2.onclick=()=>{
        Image.style.marginLeft='2vw'
        
    
        button2.style.borderRadius='25px'
        button2.style.width='18px'
    
        button1.style.width='8px'
        button3.style.width='8px'
    
        button1.style.background = 'rgba(23, 27, 36, 0.2)'
        button3.style.background = 'rgba(23, 27, 36, 0.2)'
    
        button2.style.background = '#171B24'
    
    }
    button3.onclick=()=>{
        Image.style.marginLeft='-200vw'
       
    
        button3.style.borderRadius='25px'
        button3.style.width='18px'
    
        button1.style.width='8px'
        button2.style.width='8px'
    
        button1.style.background = 'rgba(23, 27, 36, 0.2)'
        button2.style.background = 'rgba(23, 27, 36, 0.2)'
    
        button3.style.background = '#171B24'
    
    }
}

// export function Animate2(){ 
//     var button1 = document.querySelector('.Carousel .button #n1 .sub_n1')
//     var button2 = document.querySelector('.Carousel .button #n2 .sub_n2')
//     var button3 = document.querySelector('.Carousel .button #n3 .sub_n3')
//     var Image = document.querySelector('.Carousel .Images')
//     // var Popup = document.querySelector('.Popup')
    
//     // setTimeout(()=>{
//     //     setInterval(()=>{
//     //         if(Image.style.marginLeft>'2vw'){
//     //             Image.style.marginLeft='200vw'
//     //         }
//     //     },3000)
//     // },3000)
//     // button1.onclick = ()=>{
//     //     Image.style.background='pink'
//     // }
    
// }