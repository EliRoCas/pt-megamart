import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import smartphoneData from "../data/smartphoneDTO";
import { CaretRight } from "@phosphor-icons/react";
import "./smartphoneCarousel.css";

const SmartphoneCarousel = () => {
  return (
    <div className="smartphone-container">
      <div className="smartphone-header">
        <h2 className="smartphone-title">
          Grab the best deal on <span className="deal">Smartphones</span>
        </h2>
        <a
          href="#"
          className="view-all"
        >
          View All{" "}
          <CaretRight
            size={15}
            className="icon"
          />
        </a>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        freeMode={false}
        allowTouchMove={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        style={{ maxWidth: "100%" }}
      >
        {smartphoneData.map((cell) => (
          <SwiperSlide key={cell.id}>
            <div className="cell-card">
              {cell.discount > 0 && (
                <p className="cell-badge">
                  {cell.discount} <span>% OFF</span>
                </p>
              )}

              <div className="cell-image">
                <img
                  src={cell.image}
                  alt={cell.name}
                  className="cell-img"
                />
              </div>

              <h3 className="cell-title">{cell.name}</h3>
              <div className="cell-text">
                ₹{cell.price.toLocaleString()}
                <span className="cell-old-price">₹{cell.oldPrice.toLocaleString()}</span>
              </div>
              <p className="cell-discount">Save - ₹{cell.save.toLocaleString()}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmartphoneCarousel;
