import { Cart } from 'components/Cart';
import { useState } from 'react';
import { Container } from '..';
import styles from './Header.module.scss';
import { HeaderLogo, HeaderPanel } from './components';

export const Header = () => {
  const [isShowCart, setIsShowCart] = useState<boolean>(false);

  const handleIsShowCart = () => {
    setIsShowCart(!isShowCart);
  };

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <HeaderLogo />
        <HeaderPanel onClick={handleIsShowCart} />
        {isShowCart && <Cart onClick={handleIsShowCart} />}
      </Container>
    </header>
  );
};
