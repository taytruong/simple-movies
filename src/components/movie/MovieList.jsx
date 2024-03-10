import React, { useEffect, useState } from "react";
import "swiper/scss";
import useSWR from "swr"; // fetching API
import { Swiper, SwiperSlide } from "swiper/react"; // dùng frw này để kéo qua kéo lại
import MovieCard from "./MovieCard";
import { fetcher } from "../../config";
// 'https://api.themoviedb.org/3/movie/now_playing?api_key=1a3129220019c29dcf55164c1f5b41dc'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=1a3129220019c29dcf55164c1f5b41dc",
    fetcher
  );
  // console.log("🚀 ~ MovieList ~ data:", data);
  useEffect(() => {
    setMovies(data.results);
  }, [data]);
  console.log("🚀 ~ MovieList ~ movies:", movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
