import { Link } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import styles from './HeaderLogo.module.scss';
import Logo from '/images/logo.jpg';

export const HeaderLogo = () => {
  return (
    <Link to={ROUTES.HOME} className={styles.Logo}>
      <img src={Logo} alt="Logotype" className={styles.Logo__img} />
      <div className={styles.Logo__wrapper}>
        <h1 className={styles.Logo__wrapper_title}>sneakers</h1>
        <p className={styles.Logo__wrapper_descr}>Best shop sneakers...</p>
      </div>
    </Link>
  )
}
