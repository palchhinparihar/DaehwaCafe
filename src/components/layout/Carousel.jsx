import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Carousel({
  media = [],
  title = "",
  autoplay = true,
}) {
  if (!media.length) return null;

  return (
    <div className="w-full group overflow-hidden rounded-[2rem] border border-violet-100 bg-white shadow-sm">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard]}
        slidesPerView={1}
        loop={media.length > 1}
        keyboard
        navigation
        pagination={{ clickable: true }}
        autoplay={
          autoplay && media.length > 1
            ? {
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
            : false
        }
        className="aspect-[4/3]"
      >
        {media.map((item, index) => {
          const type = item.type ?? "image";

          return (
            <SwiperSlide key={index}>
              {type === "image" ? (
                <img
                  src={item.src}
                  alt={`${title} ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              ) : (
                <video
                  className="h-full w-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                  onPlay={(e) =>
                    e.target.closest(".swiper")?.swiper?.autoplay?.stop()
                  }
                  onPause={(e) =>
                    e.target.closest(".swiper")?.swiper?.autoplay?.start()
                  }
                  onEnded={(e) =>
                    e.target.closest(".swiper")?.swiper?.autoplay?.start()
                  }
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;