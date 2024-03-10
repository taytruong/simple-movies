import React from "react";

const MovieCard = () => {
  return <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
  <img
    src="https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    className="w-full h-[300px] object-cover rounded-lg mb-5"
  />
  <h3 className="text-xl font-medium mb-3">
    DC comic: The walking dead comic
  </h3>
  <div className="flex items-center justify-between text-sm opacity-50 mb-5">
    <span>2017</span>
    <span>7.4</span>
  </div>
  <button className="py-4 px-6 rounded-lg capitalize bg-primary w-full">
    Watch now
  </button>
</div>;
};

export default MovieCard;
