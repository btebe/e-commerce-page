import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import plus from "../public/images/icon-plus.svg";
import minus from "../public/images/icon-minus.svg";
import cart from "../public/images/icon-cart.svg";

function ProductInfo({ counter, setCounter, handleSumbit }) {
  const [itemcount, setItemCount] = useState(3);

  const plusRef = useRef();
  const minusRef = useRef();
  const handleKeyDown = (e) => {
    if (e.key == "ArrowRight") {
      // plus
      plusRef.current.focus();
      setItemCount(1);
    } else if (e.key == "ArrowLeft") {
      // mius
      minusRef.current.focus();
      setItemCount(0);
    }
  };

  const handleCounter = (count) => {
    if (count < 0) {
      setCounter(0);
    } else {
      setCounter(count);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler, true);
    window.addEventListener("click", handleClickEvents, true);
  }, []);

  const downHandler = (e) => {
    if (e.key == "Tab") {
      if (e.target === "counter") {
        setItemCount(0);
      } else {
        setItemCount(2);
      }
    }
  };
  const handleClickEvents = () => {
    setItemCount(2);
  };
  return (
    <article className={`${styles.product_info}`}>
      <header className={styles.product_info_header}>
        <h4 className={styles.subline}>Sneaker Company</h4>
        <h1>Fall Limited Edition Sneakers</h1>
      </header>
      <article className={styles.product_info_body}>
        <div>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className={styles.pricing}>
            <h2 className={styles.price}>$125.00</h2>
            <span className={styles.discount}>50%</span>

            <del className={styles.prev_price}>$250.00</del>
          </div>
        </div>

        <div>
          <div
            className={styles.counter}
            role='region'
            aria-label='item counter'
            tabIndex='0'
            onKeyDown={handleKeyDown}
          >
            <button
              tabIndex='-1'
              className={itemcount == 0 ? `${styles.active_count}` : ""}
              onClick={() => handleCounter(counter - 1)}
              ref={minusRef}
            >
              <Image src={minus} alt='minus to decrease amount' />
            </button>
            <strong>{counter}</strong>
            <button
              tabIndex='-1'
              ref={plusRef}
              className={itemcount == 1 ? `${styles.active_count}` : ""}
              onClick={() => handleCounter(counter + 1)}
            >
              <Image src={plus} alt='plus to increase amount' />
            </button>
          </div>
          <button className={styles.btn} onClick={() => handleSumbit()}>
            <span>
              <Image src={cart} alt='add to cart' height={15} width={15} />
            </span>
            Add to cart
          </button>
        </div>
      </article>
    </article>
  );
}

export default ProductInfo;
