import { FC } from 'react';
import styles from './Cart.module.scss';
import Empty from '/images/cart.png';

interface CartProps {
  onClick?: () => void;
}

export const Cart: FC<CartProps> = ({ onClick }) => {
  return (
    <div className={styles.Cart}>
      <div className={styles.Cart__content}>
        <h2 className={styles.Cart__content_title}>Cart</h2>
        <div className={styles.Cart__content_empty}>
          <img
            src={Empty}
            alt='Empty'
            className={styles.image}
          />
          <h3 className={styles.title}>Cart is empty</h3>
          <p className={styles.descr}>Add at least one pair of sneakers to place an order.</p>
          <button
            className={styles.btn}
            onClick={onClick}>
            Return back
          </button>
        </div>
      </div>
    </div>
  );
};
