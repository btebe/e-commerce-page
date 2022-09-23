import React from "react";
import Image from "next/image";
import prevbtn from "/public/images/icon-previous.svg";
import nextbtn from "/public/images/icon-next.svg";
const Trigger = ({
  triggerImg,
  triggerAlt,
  setTriggerAlt,
  buttonRef,
  showModal,
  data,
  setTriggerPic,
  currentslide,
  setCurrentslide,
  fireTrigger,
}) => {
  const handlePrev = (e) => {
    if (currentslide - 1 < 0) {
      setCurrentslide(data.length - 1);
      setTriggerPic(data[data.length - 1].img);
      setTriggerAlt(data[data.length - 1].name);
    } else {
      setCurrentslide(currentslide - 1);
      setTriggerPic(data[currentslide - 1].img);
      setTriggerAlt(data[currentslide - 1].name);
    }
  };

  const handleNext = (e) => {
    if (currentslide + 1 > data.length - 1) {
      setCurrentslide(0);
      setTriggerPic(data[0].img);
      setTriggerAlt(data[0].name);
    } else {
      setCurrentslide(currentslide + 1);
      setTriggerPic(data[currentslide + 1].img);
      setTriggerAlt(data[currentslide + 1].name);
    }
  };
  return (
    <div className='trigger-pic-container'>
      {fireTrigger === true ? (
        <button className='slide-image-btn' ref={buttonRef} onClick={showModal}>
          <Image src={triggerImg} alt={triggerAlt} height={445} width={445} />
        </button>
      ) : (
        <button className='slide-image-btn' tabIndex='-1'>
          <Image src={triggerImg} alt={triggerAlt} height={445} width={445} />
        </button>
      )}

      <button
        onClick={handleNext}
        className='next-btn'
        style={{ zIndex: fireTrigger === true ? "10" : "1000" }}
      >
        <Image src={nextbtn} alt='next' height={10} width={8} />
      </button>
      <button
        onClick={handlePrev}
        className='prev-btn'
        style={{ zIndex: fireTrigger === true ? "10" : "1000" }}
      >
        <Image src={prevbtn} alt='prev' height={10} width={8} />
      </button>
    </div>
  );
};
export default Trigger;
