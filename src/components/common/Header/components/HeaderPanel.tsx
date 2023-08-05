import { BiUserCircle } from 'react-icons/bi';
import { BsCart2, BsHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import s from '../Header.module.scss';

export const HeaderPanel = () => {
  return (
    <div className={s.Panel}>
      <Link
        to={ROUTES.CART}
        className={s.Panel__link}
      >
        <BsCart2 className={s.Panel__link_icon} />
        <span className={s.Panel__link_price}>$87</span>
      </Link>
      <Link
        to={ROUTES.FAVORITES}
        className={s.Panel__link}
      >
        <BsHeart className={s.Panel__link_icon} />
      </Link>
      <Link
        to={ROUTES.PROFILE}
        className={s.Panel__link}
      >
        <BiUserCircle className={s.Panel__link_icon} />
      </Link>
    </div>
  );
};
