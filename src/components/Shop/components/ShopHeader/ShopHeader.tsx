import { Icon } from 'components/common';
import styles from '../../Shop.module.scss';

export const ShopHeader = () => {
  return (
    <div className={styles.Shop__header}>
      <h2 className={styles.Shop__header_title}>All sneakers</h2>
      <div className={styles.Shop__header_search}>
        <input
          type='text'
          placeholder='Search...'
          className={styles.input}
        />
        <Icon
          name='Search'
          size={20}
          className={styles.icon}
        />
      </div>
    </div>
  );
};
