import React from "react";
import ReactDOM from "react-dom";
import TriggerButton from "../lightbox/TriggerButton";
import Image from "next/image";
import FocusTrap from "focus-trap-react";
import Thumbnail from "../lightbox/Thumbnail";
import closebtn from "/public/images/icon-close.svg";
export const Modal = ({
  onClickOutside,
  onKeyDown,
  modalRef,
  buttonRef,
  closeModal,
  triggerImg,
  triggerAlt,
  setTriggerAlt,
  data,
  setTriggerPic,
  currentslide,
  setCurrentslide,
}) => {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        tag='aside'
        role='dialog'
        tabIndex='-1'
        aria-modal='true'
        className='modal-cover'
        onClick={onClickOutside}
        onKeyDown={onKeyDown}
      >
        <div className='modal-area' ref={modalRef}>
          <button
            ref={buttonRef}
            aria-label='Close Modal'
            aria-labelledby='close-modal'
            className='_modal-close'
            onClick={closeModal}
          >
            <span id='close-modal' className='_hide-visual'>
              Close
            </span>
            <Image
              src={closebtn}
              alt={"close"}
              height={20}
              width={20}
              className='_modal-close-icon'
            />
          </button>
          <div className='modal-body'>
            <TriggerButton
              fireTrigger={false}
              triggerImg={triggerImg}
              setTriggerPic={setTriggerPic}
              setTriggerAlt={setTriggerAlt}
              triggerAlt={triggerAlt}
              data={data}
              currentslide={currentslide}
              setCurrentslide={setCurrentslide}
            />
            <Thumbnail
              data={data}
              triggerAlt={triggerAlt}
              setTriggerAlt={setTriggerAlt}
              setTriggerPic={setTriggerPic}
              currentslide={currentslide}
              setCurrentslide={setCurrentslide}
            />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default Modal;
