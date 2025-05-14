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
            <div className="slide-content">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="slide-text-overlay">
                <p className="slide-text">Best Deal Online on {product.category}</p>
                <h2 className="slide-title">{product.name}.</h2>
                {product.discount > 0 ? (
                  <p className="slide-promotion">Up to {product.discount}% OFF</p>
                ) : (
                  <p className="product-status">New Arrival</p>
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
