import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import classes from "./CastCarousel.module.scss";

function CastCarousel({ movieCast }) {
  const backdropUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      {movieCast.length > 0 ? (
        <div className={classes.MovieCast}>
          <h2>Cast</h2>
          <Swiper
            className={classes.SwiperContainer}
            breakpoints={{
              // when window width is >= 640px
              300: {
                width: 300,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 5,
              },
            }}
            spaceBetween={7}
          >
            {movieCast.map((actor) => {
              return (
                <SwiperSlide key={actor.id} className={classes.Slide}>
                  {actor.profile_path ? (
                    <img
                      src={`${backdropUrl}${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <div className={classes.NoBackdrop}>{actor.name}</div>
                  )}
                  <div className={classes.ActorName}>
                    <p>{actor.name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
}

export default CastCarousel;
