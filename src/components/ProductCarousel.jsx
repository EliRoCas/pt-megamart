import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import productsData from "../data/productsDTO";
import "./productCarousel.css";

const ProductCarousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {productsData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="w-full h-[350px] flex flex-row-reverse items-center justify-center bg-gradient-to-r from-[#211844] to-[#505e96] rounded-[16px] overflow-hidden px-8">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-[45%] h-[80%] m-4 object-contain rounded-[12px] shadow-lg z-2"
              />
              <div className="w-[55%] mx-8 text-white flex flex-col items-start z-2">
                <p className="text-[1.5rem] my-2 text-white">Best Deal Online on {product.category}</p>
                <h2 className="text-[2.5rem] font-bold leading-[1.1] my-2 uppercase">{product.name}.</h2>
                {product.discount > 0 ? (
                  <p className="text-[1.5rem] my-2">Up to {product.discount}% OFF</p>
                ) : (
                  <p className="text-[1.5rem] my-2">New Arrival</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
