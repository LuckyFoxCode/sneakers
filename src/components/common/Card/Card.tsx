import { Icon } from 'components/common';
import { FC, useState } from 'react';
import styles from './Card.module.scss';
import { CardPrice } from './components';
import Sneakers from '/images/sneakers_01.jpg';

export const Card: FC = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const favoriteBtnStyles = {
    backgroundColor: isFavorite ? '#fee4e2' : '#ffffff',
    borderColor: isFavorite ? '#fee4e2' : '#eaecf0',
  };

  return (
    <div className={styles.Card}>
      <button
        className={styles.Card__favorite}
        onClick={handleFavorite}
        style={favoriteBtnStyles}>
        <Icon
          size={16}
          name={'Heart'}
          fill={isFavorite ? '#f97066' : '#d0d5dd'}
          className={styles.Card__favorite_icon}
        />
      </button>
      <img
        src={Sneakers}
        alt='Sneakers'
        className={styles.Card__image}
      />
      <h2 className={styles.Card__title}>Nike Blazer Mid Suede</h2>
      <CardPrice />
    </div>
  );
};
