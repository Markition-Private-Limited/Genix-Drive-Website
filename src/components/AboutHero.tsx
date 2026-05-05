import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";

// Importing images for the slider
import img1 from "../assets/slider/1.jpg";
import img2 from "../assets/slider/2.jpg";
import img3 from "../assets/slider/3.jpg";
import img4 from "../assets/slider/4.jpg";
import img5 from "../assets/slider/5.jpg";
import img6 from "../assets/slider/6.jpg";
import img7 from "../assets/slider/7.png";
import img8 from "../assets/slider/8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const AboutHero = () => {
  return (
    <div className="w-full bg-surface-light pt-20 pb-10 overflow-hidden font-cairo">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <StarIcon className="text-[#BFBBFF] w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
          <h1 className="text-4xl lg:text-6xl font-black text-black tracking-tight">
            About <span className="text-primary">Genix Drive</span>
          </h1>
          <StarIcon className="text-[#BFBBFF] w-8 h-8 lg:w-12 lg:h-12 animate-pulse" />
        </div>

        {/* Description Text */}
        <p className="text-gray-600 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
          At GenixDrive, we believe safety goes beyond technology — it's about
          people. Built by AiGenix, our mission is to make every journey
          smarter, safer, and more connected.
        </p>

        {/* 3D Curved Slider */}
        <div className="relative w-full max-w-[1400px] mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
              scale: 0.85,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full py-10"
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="w-[280px] h-[360px] lg:w-[320px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 [&.swiper-slide-active]:scale-110"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
            {/* Duplicate images to ensure loop works smoothly with few images */}
            {images.map((img, index) => (
              <SwiperSlide
                key={`dup-${index}`}
                className="w-[280px] h-[360px] lg:w-[320px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 [&.swiper-slide-active]:scale-110"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
