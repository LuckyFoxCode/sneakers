import { Container } from 'components/common';
import { FC } from 'react';
import styles from './Shop.module.scss';
import { ShopHeader, ShopList } from './components';

export const Shop: FC = () => {
  return (
    <section className={styles.Shop}>
      <Container className={styles.Container}>
        <ShopHeader />
        <ShopList />
      </Container>
    </section>
  );
};
