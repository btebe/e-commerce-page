import React, { useRef } from "react";
import Image from "next/image";
function Thumbnail({
  data,
  setTriggerPic,
  currentslide,
  setCurrentslide,
  setTriggerAlt,
}) {
  const reffocus = useRef();
  const handleClick = (e, item) => {
    setTriggerPic(item.img);
    setTriggerAlt(item.name);
    setCurrentslide(parseInt(item.id) - 1);
  };
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      if (currentslide + 1 > data.length - 1) {
        setCurrentslide(0);
        setTriggerPic(data[0].img);
        setTriggerAlt(data[0].name);
      } else {
        setCurrentslide(currentslide + 1);
        setTriggerPic(data[currentslide + 1].img);
        setTriggerAlt(data[currentslide + 1].name);
      }
    } else if (e.key === "ArrowLeft") {
      if (currentslide - 1 < 0) {
        setCurrentslide(data.length - 1);
        setTriggerPic(data[data.length - 1].img);
        setTriggerAlt(data[data.length - 1].name);
      } else {
        setCurrentslide(currentslide - 1);
        setTriggerPic(data[currentslide - 1].img);
        setTriggerAlt(data[currentslide - 1].name);
      }
    }
  };
  return (
    <ul
      aria-label='thumbnail carousel'
      tabIndex='0'
      onKeyDown={handleKeyDown}
      ref={reffocus}
      className={"thumb-carousel"}
    >
      {data.map((item, index) => {
        return (
          <li
            key={item.id}
            onClick={(e) => handleClick(e, item)}
            className={currentslide === index ? "active" : ""}
          >
            <Image
              src={item.thumbnail}
              alt={item.name}
              height={88}
              width={88}
              priority={true}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default Thumbnail;
