import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import s from '../Header.module.scss';
import Logo from '/images/logo.jpg';

export const HeaderLogo = () => {
  return (
    <Link
      to={ROUTES.HOME}
      className={s.Logo}
    >
      <img
        src={Logo}
        alt='Logo'
        className={s.Logo__img}
      />
      <div className={s.Logo__wrapper}>
        <h1 className={s.Logo__wrapper_title}>sneakers</h1>
        <p className={s.Logo__wrapper_descr}>Best shop sneakers</p>
      </div>
    </Link>
  );
};
