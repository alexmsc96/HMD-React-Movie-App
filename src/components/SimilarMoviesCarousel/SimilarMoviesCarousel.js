import React from "react";
import classes from "./SimilarMoviesCarousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import { Link } from "react-router-dom";

function SimilarMoviesCarousel({ similar }) {
  const backdropUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      {similar.length > 0 ? (
        <div className={classes.More}>
          <h2>More like this</h2>
          <Swiper
            className={classes.SwiperContainer}
            breakpoints={{
              // when window width is >= 640px
              300: {
                width: 300,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
          >
            {similar.map((movie) => {
              return (
                <SwiperSlide key={movie.id} className={classes.Slide}>
                  <Link to={`/movie/${movie.id}`}>
                    {movie.backdrop_path ? (
                      <img
                        src={`${backdropUrl}${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                    ) : (
                      <div className={classes.NoBackdrop}>{movie.title}</div>
                    )}
                    <div className={classes.MovieTitle}>
                      <p>{movie.title}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : null}
    </div>
  );
}

export default SimilarMoviesCarousel;
