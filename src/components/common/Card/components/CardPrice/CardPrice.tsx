import { Icon } from 'components/common';
import { useState } from 'react';
import styles from '../../Card.module.scss';

export const CardPrice = () => {
  const [isAddCard, setIsAddCard] = useState<boolean>(false);

  const handleAddCard = () => {
    setIsAddCard(!isAddCard);
  };

  const styleIcon = {
    rotate: isAddCard ? '0deg' : '45deg',
    fill: isAddCard ? '#ffffff' : 'd0d5dd',
  };

  return (
    <div className={styles.Price}>
      <div className={styles.Price__descr}>
        <p className={styles.Price__descr_title}>price:</p>
        <p className={styles.Price__descr_text}>$ 87.99</p>
      </div>

      <button
        className={styles.Price__btn}
        onClick={handleAddCard}
        style={{ backgroundColor: isAddCard ? '#12b76a' : 'transparent' }}>
        <Icon
          size={16}
          name={isAddCard ? 'Check' : 'Close'}
          className={styles.Price__btn_icon}
          style={styleIcon}
        />
      </button>
    </div>
  );
};
