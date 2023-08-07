import { Icon } from 'components/common';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import styles from './HeaderPanel.module.scss';

export const HeaderPanel = () => {
  const [theme, setTheme] = useState(false);

  return (
    <div className={styles.Panel}>
      <Link
        to={ROUTES.CART}
        className={styles.Panel__link}>
        <Icon
          name='Cart'
          size={20}
          className={styles.Panel__link_icon}
        />
        <span className={styles.Panel__link_price}>$45</span>
      </Link>
      <Link
        to={ROUTES.FAVORITES}
        className={styles.Panel__link}>
        <Icon
          name='Heart'
          size={20}
          className={styles.Panel__link_icon}
        />
      </Link>
      <Link
        to={ROUTES.PROFILE}
        className={styles.Panel__link}>
        <Icon
          name='Profile'
          size={20}
          className={styles.Panel__link_icon}
        />
      </Link>
      <button
        className={styles.Panel__theme}
        onClick={() => setTheme(!theme)}>
        <Icon
          name={theme ? 'Sun' : 'Night'}
          size={20}
          className={styles.Panel__theme_icon}
        />
      </button>
    </div>
  );
};
