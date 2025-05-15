import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import smartphoneData from "../data/smartphoneDTO";
import { CaretRight } from "@phosphor-icons/react";
import "./smartphoneCarousel.css";

const SmartphoneCarousel = () => {
  return (
    <div className="box-border flex flex-col justify-center items-center max-w-full overflow-hidden px-4">
      <div className="flex justify-between items-center w-full p-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-[#999090] underline underline-offset-8 decoration-[#0566a3]">
          Grab the best deal on <span className="text-[#0566a3]">Smartphones</span>
        </h2>
        <a
          href="#"
          className="text-base text-black no-underline flex items-center hover:text-[#0566a3] transition-colors"
        >
          View All{" "}
          <CaretRight
            size={15}
            className="text-[#0566a3] ml-1"
          />
        </a>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        allowTouchMove={true}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          480: { slidesPerView: 1.8 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4.5 },
        }}
        className="w-full max-w-6xl"
      >
        {smartphoneData.map((cell) => (
          <SwiperSlide
            key={cell.id}
            className="px-1 pb-6"
          >
            <div className="cell-card">
              {cell.discount > 0 && (
                <span className="cell-badge">
                  {cell.discount} <span>% OFF</span>
                </span>
              )}
              <div className="flex justify-center items-center mb-2 h-40">
                <img
                  src={cell.image}
                  alt={cell.name}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">{cell.name}</h3>
              <div className="text-base font-bold text-[#0566a3]">
                ₹{cell.price.toLocaleString()}
                <span className="line-through text-gray-400 ml-2 font-normal">
                  ₹{cell.oldPrice.toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-green-600 mt-1">
                Save - ₹{cell.save.toLocaleString()}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmartphoneCarousel;
