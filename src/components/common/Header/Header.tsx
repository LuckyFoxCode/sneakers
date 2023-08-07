import { Container } from '..';
import styles from './Header.module.scss';
import { HeaderLogo, HeaderPanel } from './components';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <HeaderLogo />
        <HeaderPanel />
      </Container>
    </header>
  );
};
