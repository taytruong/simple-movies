import { Fragment } from "react";
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-medium">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-medium">
          Top Rated
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
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
          </div>
        </div>
      </section>
      <section className="movies-layout page-container-fluid pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-medium">
          Trending
        </h2>
        <div className="movie-list grid grid-cols-4 gap-10">
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
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
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
