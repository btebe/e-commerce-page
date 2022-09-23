import React, { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import deletebtn from "../public/images/icon-delete.svg";
function Cart({
  pic,
  repeat,
  total,
  handleBlurCart,
  handleFocusCart,
  isRemove,
  handleRemove,
  showCart,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h4>Cart</h4>
      </div>

      <div className={styles.card_body}>
        {isRemove && repeat != 0 && total != 0 && (
          <CartItem
            pic={pic}
            repeat={repeat}
            total={total}
            handleRemove={handleRemove}
            handleBlurCart={handleBlurCart}
            handleFocusCart={handleFocusCart}
            showCart={showCart}
          />
        )}
        {!isRemove && repeat == 0 && total == 0 && <p>Your cart is empty</p>}
      </div>
    </div>
  );
}

function CartItem({
  pic,
  repeat,
  total,
  handleRemove,
  handleBlurCart,
  handleFocusCart,
  showCart,
}) {
  const cartRef = useRef();
  useEffect(() => {
    if (showCart === true) {
      cartRef.current.focus();
    }
  }, [showCart]);

  return (
    <section className={styles.cart_item_container} tabIndex={0} ref={cartRef}>
      <article className={styles.cart_item_body}>
        <Image src={pic} alt='product' height={50} width={50} priority={true} />
        <p>Fall Limited Edition Sneakers</p>
        <p>
          $125.000 <span> x {repeat}</span>
          <strong>${total}.00</strong>
        </p>
        <button onClick={handleRemove}>
          <span className='sr-only'>delete</span>
          <Image
            src={deletebtn}
            alt='delete item'
            height={16}
            width={14}
            priority={true}
          />
        </button>
      </article>
      <button
        className={styles.btn}
        onBlur={() => handleBlurCart()}
        onFocus={() => handleFocusCart()}
      >
        Checkout
      </button>
    </section>
  );
}

export default Cart;
