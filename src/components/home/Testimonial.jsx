import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// modules={[EffectCoverflow, Pagination, Navigation]}

const Testimonial = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-12">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        className="h-[850px] relative py-8"
      >
        <SwiperSlide className="w-[448px] sm:w-[592px] h-[576px] sm:h-[672px] relative black-shadow p-12 m-5">
          <div className=" ">
            <h2 className="font-medium font-secondary text-2xl">John doe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas
              numquam aliquid? Voluptatem omnis nam placeat dicta nisi expedita
              cumque eum, reiciendis aperiam voluptate, vero accusantium
              necessitatibus amet obcaecati officiis quia architecto odit quam,
              magnam quis. Temporibus quibusdam sint omnis adipisci molestias
              obcaecati maxime facere et, quisquam accusamus rem aliquid.
            </p>
            <p>5 star</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[448px] sm:w-[592px] h-[576px] sm:h-[672px] relative black-shadow p-12 m-5">
          <div className=" ">
            <h2 className="font-medium font-secondary text-2xl">John doe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas
              numquam aliquid? Voluptatem omnis nam placeat dicta nisi expedita
              cumque eum, reiciendis aperiam voluptate, vero accusantium
              necessitatibus amet obcaecati officiis quia architecto odit quam,
              magnam quis. Temporibus quibusdam sint omnis adipisci molestias
              obcaecati maxime facere et, quisquam accusamus rem aliquid.
            </p>
            <p>5 star</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[448px] sm:w-[592px] h-[576px] sm:h-[672px] relative black-shadow p-12 m-5">
          <div className=" ">
            <h2 className="font-medium font-secondary text-2xl">John doe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quas
              numquam aliquid? Voluptatem omnis nam placeat dicta nisi expedita
              cumque eum, reiciendis aperiam voluptate, vero accusantium
              necessitatibus amet obcaecati officiis quia architecto odit quam,
              magnam quis. Temporibus quibusdam sint omnis adipisci molestias
              obcaecati maxime facere et, quisquam accusamus rem aliquid.
            </p>
            <p>5 star</p>
          </div>
        </SwiperSlide>

        <div className="slider-controler relative bottom-8 flex justify-center items-center">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
