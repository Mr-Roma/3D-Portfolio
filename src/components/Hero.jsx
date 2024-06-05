import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax">
      <div className='parallax__content absolute top-1/4 sm:top-1/3 lg:top-1/4 w-full mx-auto px-4 sm:px-8 lg:px-32 xl:px-48 2xl:px-60 3xl:px-72 flex flex-col lg:flex-row items-start z-10'>
        <div className="flex-1 lg:mb-0">
          <div className="relative -top-10 ml-100">
            <Position />
          </div>
          <h1 className='ml-100 font-bold font-helvetica text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose'>
            ROMARIO MARCAL
          </h1>
        </div>
      </div>

      <img className="parallax__stars" src="./parallax/1Stars.svg" alt="" />
      <img className="parallax__planets" src="./parallax/2Planets.svg" alt="" />
      <img className="parallax__mountain1" src="./parallax/3Mountain.svg" alt="" />
      <img className="parallax__mountain2" src="./parallax/4Mountain.svg" alt="" />
      <img className="parallax__crater" src="./parallax/5Crater.svg" alt="" />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="" />
      <img className="parallax__sun" src="./parallax/house.png" alt="" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
      
    </section>
  );
};

export default Hero;