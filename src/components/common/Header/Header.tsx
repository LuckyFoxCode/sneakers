import { Container } from '..';
import s from './Header.module.scss';
import { HeaderLogo, HeaderPanel } from './components';

export const Header = () => {
  return (
    <header className={s.Header}>
      <Container className={s.Container}>
        <HeaderLogo />
        <HeaderPanel />
      </Container>
    </header>
  );
};
