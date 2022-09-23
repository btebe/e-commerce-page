import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../public/images/logo.svg";
import Image from "next/image";
import cart from "../public/images/icon-cart.svg";
import avatar from "../public/images/image-avatar.png";
import Cart from "./Cart";
import Link from "next/link";

function Nav({
  setShow,
  show,
  navToggle,
  isTabletOrMobile,
  pic,
  repeat,
  total,
  isRemove,
  handleRemove,
  showCart,
  setShowCart,
}) {
  const handleBlur = () => {
    if (isTabletOrMobile) setShow(false);
  };

  const handleFocus = () => {
    if (isTabletOrMobile) setShow(true);
  };
  const handleBlurCart = () => {
    setShowCart(false);
  };

  const handleFocusCart = () => {
    setShowCart(true);
  };

  return (
    <header className={`${styles.primary_header} container`}>
      <div className={styles.menu}>
        <button
          className={styles.mobile_nav_toggle}
          aria-controls='primary-navation'
          aria-expanded={show ? "true" : "false"}
          onClick={navToggle}
        >
          <span className='sr-only'>Menu</span>
        </button>
        <div className='logo'>
          <Image
            src={logo}
            alt='Logo'
            width={137}
            height={20}
            priority={true}
          />
        </div>
      </div>

      <nav
        id='primary-navation'
        className={styles.primary_nav}
        data-visible={show ? "true" : "false"}
        onBlur={() => handleBlur()}
        onFocus={() => handleFocus()}
      >
        <ul
          className={`${styles.primary_nav_item_one} ${styles.underline_indicators}`}
        >
          <li>
            <Link href='/'>
              <a>Collections</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Men</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Women</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={styles.primary_nav_item_two}>
        <li>
          <button onClick={() => setShowCart(!showCart)} role='button'>
            <Image src={cart} alt='cart' height={20} priority={true} />
          </button>
          {showCart && (
            <Cart
              pic={pic}
              repeat={repeat}
              total={total}
              handleBlurCart={handleBlurCart}
              handleFocusCart={handleFocusCart}
              isRemove={isRemove}
              handleRemove={handleRemove}
              showCart={showCart}
            />
          )}
        </li>
        <li>
          <Link href='/'>
            <a>
              <Image
                src={avatar}
                alt='profile'
                height={50}
                width={50}
                priority={true}
              />
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
