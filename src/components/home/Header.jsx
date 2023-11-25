import Button from '../common/Button';
import HeroOne from '../../assets/heroOne.png';
import HeroTwo from '../../assets/heroTwo.png';
import HeroThree from '../../assets/heroThree.png';
import HeroSmallOne from '../../assets/hero-1.png';
import HeroSmallTwo from '../../assets/hero-2.png';
import HeroSmallThree from '../../assets/hero-3.png';
import HeroArrow from '../../assets/hero-arrow.png';
import { useState } from 'react';

const Hero = () => {
  const [activeImage, setActiveImage] = useState(HeroOne);

  return (
    <section className="pb-12 pt-28 md:pb-20 lg:pb-28 lg:pt-36 bg-[#ebce6e] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-10 gap-4 lg:gap-8">
          <div className="col-span-1 lg:col-span-4">
            <div className="flex flex-col justify-center gap-y-6 h-full">
              <h2 className="text-3xl md:text-5xl xl:text-6xl leading-tight md:text-leading-tight xl:leading-tight font-bold uppercase text-center lg:text-start">
                EMBROIDERED MENS KABLI SET
              </h2>
              <p className="md:text-lg text-center lg:text-start font-secondary leading-normal  lg:mr-28 ">
                Don’t Lose this opportunity. Grab The Best product at you price
                range. We offer best product at best price.
              </p>
              <div className="my-6 lg:my-0 text-center lg:text-start">
                <Button
                  text="Shop Now"
                  classname="!bg-secondary-color !text-primary-color"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="flex justify-center items-center ">
              <img
                src={activeImage}
                alt=""
                className="text-center max-h-[600px] object-cover lg:max-h-auto"
              />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <div className="flex flex-col justify-between gap-y-3 h-full">
              <div className="flex flex-col items-center lg:items-end gap-y-2 mt-6 lg:mt-12">
                <h5 className="text-xl md:text-2xl uppercase text-center lg:text-end font-secondary lg:ml-12 xl:ml-20 mb-6">
                  PANJABI MADE OF WATER-REPELLENT FABRIC
                </h5>
                <img
                  src={HeroArrow}
                  alt=""
                  className="relative pr-4 lg:pr-12 hidden lg:block"
                />
              </div>
              <div className="flex items-center justify-center gap-x-2.5">
                <img
                  src={HeroSmallOne}
                  alt=""
                  className="max-w-[150px] h-auto min-w-[80px] hover:-translate-y-3 duration-300 cursor-pointer flex-1"
                  onClick={() => setActiveImage(HeroOne)}
                />
                <img
                  src={HeroSmallTwo}
                  alt=""
                  className="max-w-[150px] h-auto min-w-[80px] -translate-y-4 hover:-translate-y-6 duration-300 cursor-pointer  flex-1"
                  onClick={() => setActiveImage(HeroTwo)}
                />
                <img
                  src={HeroSmallThree}
                  alt=""
                  className="max-w-[150px] h-auto min-w-[80px] hover:-translate-y-3 duration-300 cursor-pointer  flex-1"
                  onClick={() => setActiveImage(HeroThree)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
