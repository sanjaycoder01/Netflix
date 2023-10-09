import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, id }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-56 pr-4">
      <Link to={"" + id}>
        <img
          alt="Movie Card"
          className="h-full w-full rounded object-cove"
          src={IMG_CDN_URL + posterPath}
        />
      </Link>
    </div>
    // <Link to={"/browse/" + id}>
    // <img alt='Movie Card'   className='rounded-xl' src={IMG_CDN_URL + posterPath}/>
    // </Link>
  );
};

export default MovieCard;
