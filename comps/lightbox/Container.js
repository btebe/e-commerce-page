import React, { Component } from "react";
import { Modal } from "../lightbox/Modal";
import TriggerButton from "../lightbox/TriggerButton";
import Thumbnail from "../lightbox/Thumbnail";
export class Container extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };
  render() {
    return (
      <React.Fragment>
        <TriggerButton
          fireTrigger={this.props.fireTrigger}
          showModal={this.showModal}
          buttonRef={(n) => (this.TriggerButton = n)}
          triggerImg={this.props.triggerImg}
          setTriggerPic={this.props.setTriggerPic}
          setTriggerAlt={this.props.setTriggerAlt}
          triggerAlt={this.props.triggerAlt}
          data={this.props.data}
          currentslide={this.props.currentslide}
          setCurrentslide={this.props.setCurrentslide}
        />
        {this.state.isShown ? (
          <Modal
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
            triggerImg={this.props.triggerImg}
            setTriggerPic={this.props.setTriggerPic}
            triggerAlt={this.props.triggerAlt}
            setTriggerAlt={this.props.setTriggerAlt}
            data={this.props.data}
            currentslide={this.props.currentslide}
            setCurrentslide={this.props.setCurrentslide}
          />
        ) : null}
        <Thumbnail
          data={this.props.data}
          triggerAlt={this.props.triggerAlt}
          setTriggerAlt={this.props.setTriggerAlt}
          setTriggerPic={this.props.setTriggerPic}
          currentslide={this.props.currentslide}
          setCurrentslide={this.props.setCurrentslide}
        />
      </React.Fragment>
    );
  }
}

export default Container;
