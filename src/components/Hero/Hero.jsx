import polo from '../../assets/polo.jpg';
import polo2 from '../../assets/vw.jpg';
import polo3 from '../../assets/black.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, A11y,EffectCube,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import './Hero.css';

const Hero = () => {
  return (
      <Swiper
        className="hero"
        pagination={true}
        modules={[ Scrollbar, A11y,Autoplay,EffectCube,Pagination]}
        slidesPerView={1}
        speed={2000}
        autoplay={{
          delay:2000,
        }}
        loop={true}
        effect='cube'
        grabCursor='true'
        cubeEffect={{
          shadow:true,
          slideShadows:true,
          shadowOffset:20,
          shadowScale:0.94
        }}
        scrollbar={{ draggable: true }}
      >
        <Swiper slidesPerView={3} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true}>
        <SwiperSlide>
          <img src={polo} alt="Hero image" />
          <div className="hero-info" >
            <h1>
              <span>Welcome to </span> Volkswagen <span>Dubai</span>
            </h1>
            <p className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Ipsa nulla rem doloremque minus labore.</p>
            <a href="" className="cta-btn">
              Explore More
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={polo2} alt="Hero image" />
          <div className="hero-info" >
            <h1>
              <span>Welcome to </span> Volkswagen <span>Dubai</span>
            </h1>
            <p className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Ipsa nulla rem doloremque minus labore.</p>
            <a href="" className="cta-btn">
              Explore More
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={polo3} alt="Hero image" />
          <div className="hero-info" >
            <h1>
              <span>Welcome to </span> Volkswagen <span>Dubai</span>
            </h1>
            <p className='lorem'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Ipsa nulla rem doloremque minus labore.</p>
            <a href="" className="cta-btn">
              Explore More
            </a>
          </div>
        </SwiperSlide>
        </Swiper>
      </Swiper>
  );
};

export default Hero;
