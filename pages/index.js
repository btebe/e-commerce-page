import Head from "next/head";
import React, { useState } from "react";
import Nav from "../comps/Nav";
import styles from "../styles/Home.module.css";
import ProductInfo from "../comps/ProductInfo";
import { useMediaQuery } from "react-responsive";
import { data } from "../data/Product";
import Container from "../comps/lightbox/Container";

export default function Home() {
  const [show, setShow] = useState(false);
  const [triggerPic, setTriggerPic] = useState(data[0].img);
  const [triggerAlt, setTriggerAlt] = useState(data[0].name);
  const [currentslide, setCurrentslide] = useState(0);
  const [counter, setCounter] = useState(0);
  const [quatity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [isRemove, setIsRemove] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleRemove = () => {
    setIsRemove(false);
    setCounter(0);
    setTotal(0);
    setQuantity(0);
    setShowCart(false);
  };

  const navToggle = () => {
    setShow(!show);
  };

  const handleSumbit = () => {
    if (counter != 0) {
      let price = 125;
      setQuantity(counter);
      setTotal(counter * price);
      setIsRemove(true);
      setCounter(0);
      setShowCart(true);
    }
  };

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div className='main-body'>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <div
        className={
          show == true
            ? `${styles.overlay} d-block`
            : `${styles.overlay} d-none`
        }
      ></div>

      <Nav
        setShow={setShow}
        show={show}
        showCart={showCart}
        setShowCart={setShowCart}
        navToggle={navToggle}
        isTabletOrMobile={isTabletOrMobile}
        pic={data[0].thumbnail}
        repeat={quatity}
        total={total}
        setCounter={setCounter}
        setTotal={setTotal}
        isRemove={isRemove}
        handleRemove={handleRemove}
        quatity={quatity}
      />
      <main className={`${styles.main} container-main`}>
        <ProductInfo
          counter={counter}
          setCounter={setCounter}
          handleSumbit={handleSumbit}
        />
        <figure className='lightbox'>
          <Container
            fireTrigger={true}
            triggerImg={triggerPic}
            triggerAlt={triggerAlt}
            setTriggerAlt={setTriggerAlt}
            data={data}
            setTriggerPic={setTriggerPic}
            currentslide={currentslide}
            setCurrentslide={setCurrentslide}
          />
        </figure>
      </main>
    </div>
  );
}
