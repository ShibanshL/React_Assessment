import './App.css';
import Carousel from './Component/Carousel';
import Controlbar from './Component/Controlbar';
import Product from './Component/Product';
import { pop } from './Popup';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    pop()
  },[])
  return (
    <div className='Main'>
      <div className='Sub'>
        <div className='Carousel'>
          <Carousel/>
          </div>
        <div className='Products'> 
          <Product/>
        </div>
        <div className='Control_bar'>
          <Controlbar/>
        </div>
        <div className='P2'></div>
      </div>

    <div className='Popup'>Please Use mobile to view this site</div>
    </div>
  )
}

export default App;
