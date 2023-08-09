import { Icon } from 'components/common';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import styles from './HeaderPanel.module.scss';

export const HeaderPanel = () => {
  return (
    <div className={styles.Panel}>
      <button className={styles.Panel__link}>
        <Icon
          name='Cart'
          size={20}
          className={styles.Panel__link_icon}
        />
        <span className={styles.Panel__link_price}>$45</span>
      </button>
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
    </div>
  );
};
