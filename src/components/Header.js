import React, { useEffect, useState } from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./utils/constant";
import { cacheResults } from "./utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestionsBox, setShowSuggestionsBox] = useState(false);

  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 bg-white fixed w-full z-50 top-0">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 ms-3 cursor-pointer "
          alt="hamm"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADy8vKDg4M3Nzc+Pj6Ghob19fU5OTkzMzPS0tIVFRW1tbVzc3Ph4eGLi4t7e3tNTU27u7tmZmacnJxbW1vBwcFFRUVUVFSioqLp6emsrKxhYWGSkpLg4ODHx8fU98TiAAAB5UlEQVR4nO3da1IiMRQGUGZoukFAFLV96/53qU3N/JvSVEJ505lzVnC/SkI6VB6LBQAAAAAAAAAAAMBPG37XaDhTustD96tW3eGyPOBVdIpvXBXmG+ptv7+6ss66iq4/waok4Gt09Ule8wMO0bUnyu+nz9GlJ3rOTvgSXXqil+yE6+jSE62zE26iS0+0yU54HV16ouvshMvo0hMtsxNeRJee6CI74Sw+aco+aubRiAVNOI85P3++PzlG1/+tY1nAxeLpJjrCl26eSgN+Gna3/bJG/e3uXH9kAAAAAAAAAAD8lPf+btXVaHXXv58h33EbvWXmS9viDUO1HygpPlKyj64/QVHEXXT1SXYFCaNrT5QfcIwuPdGYnXAOo3CSPxLnsQm6ZBt0++ct7qNLT3SfnXAu43CfnbD939L258P/4JtmFiMxfxSeNL+2+Oyola8Pi7roH+P+YR29nP+n9cO+4FcUAAAAAAAAACDEMD5Wevfl43iOuy+bv7+0/jtoC7fUNH+PcPt3Qdf/Bsuka70JSxrxEF16okN2wvb36rd/3qL9MzPtvzMzh/l+kj/nt//eU/tvds3jPaT8t5AmQ/0TxqZ0jVj7qZnCEzOTt77eMyXb/q084Enb75ACAAAAAAAAAAAApPsAtcs1XnQo7SwAAAAASUVORK5CYII="
        />
        <a href="/" className="flex items-center">
          <img
            className="h-6 ms-5 me-1"
            alt="yt-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          />
          <sup>IN</sup>
        </a>
      </div>
      <div className="col-span-10 mx-auto w-[80%]">
        <div className="flex">
          <input
            className="h-9 w-full rounded-s-full p-4 border border-gray-400"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionsBox(true)}
            onBlur={() => setShowSuggestionsBox(false)}
          />

          <button className="h-9 w-16 rounded-e-full bg-gray-100 border border-gray-400 text-xl ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="w-9 px-3 h-9 ms-5 bg-gray-200 rounded-full">
            <i className="fa-solid fa-microphone"></i>
          </button>
        </div>
        {showSuggestionsBox && (
          <div className="fixed w-[43.5%] rounded-lg shadow-lg border border-gray-50 bg-white">
            <ul className="font-medium">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-200 rounded"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-end items-center col-span-1">
        <img
          className="h-6 mx-1"
          alt="video-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/1200px-Video_camera_icon.svg.png"
        />
        <img
          className="h-6 mx-8"
          alt="noti-logo"
          src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png"
        />
        <img
          className="h-8"
          alt="user-logo"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        />
      </div>
    </div>
  );
}

export default Header;
