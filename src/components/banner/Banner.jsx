import React from "react";
import useSWR from "swr"; // fetching API
import { fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react"; // dùng frw này để kéo qua kéo lại
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { apiKey } from "../../config";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="banner h-[700px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path, poster_path, id, overview } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative select-none">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg "></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg "
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-medium text-3xl mb-5">{title}</h2>
        <div className="flex gap-x-3 max-w-[500px] mb-5 leading-7">
          {/* <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Action
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Drama
          </span> */}
          {overview}
        </div>
        <Button
          bgColor="primary"
          onClick={() => navigate(`/movie/${id}`)}
          className="w-auto"
        >
          Watch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 ml-2"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
