import './App.css'
import back_img from './assets/back_img.jpg'
import img_name from './assets/name.png'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: /Mobi/.test(navigator.userAgent)?3:6 ,
    slidesToScroll: 3
  };
  return (
    <>
      <div className='back_img'>
        <div className='title'>
          <img className='back_img_name' src={img_name}></img>
          <p>JAPANESE</p>
          <p>the human whose name is written in this note shall die!!</p>
          <button className='button'>PLAY</button>
        </div>
      </div>
      <br></br>
      <div className='slider_container'>
        <Slider {...settings}>
          <div className='slider_img'>
            <img src={img1}></img>
          </div>
          <div className='slider_img'>
            <img src={img2}></img>
          </div>
          <div className='slider_img'>
            <img src={img3}></img>
          </div>
          <div className='slider_img'>
            <img src={img1}></img>
          </div>
          <div className='slider_img'>
            <img src={img2}></img>
          </div>
          <div className='slider_img'>
            <img src={img3}></img>
          </div>
          <div className='slider_img'>
            <img src={img1}></img>
          </div>
          <div className='slider_img'>
            <img src={img2}></img>
          </div>
          <div className='slider_img'>
            <img src={img3}></img>
          </div>
        </Slider>
      </div>
      
    </>
  )
}

export default App
