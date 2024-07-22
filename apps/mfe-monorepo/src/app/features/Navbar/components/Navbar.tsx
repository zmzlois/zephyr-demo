import styles from './Navbar.module.css';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useTheme, Theme } from '../../Theme/ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const changeTheme = (themeName: Theme) => {
    toggleTheme();
  };

  const InactiveThemeIcon = () => {
    const onClick = () =>
      theme === 'dark' ? changeTheme('light') : changeTheme('dark');

    return theme === 'dark' ? (
      <SunIcon className={styles['nav-bar_theme-icon']} onClick={onClick} />
    ) : (
      <MoonIcon className={styles['nav-bar_theme-icon']} onClick={onClick} />
    );
  };

  return (
    <div className={styles['nav-bar']}>
      <div className={styles['nav-bar_title']}>
        <Link to="/">Elite T-Shirts</Link>
      </div>
      <div className={styles['nav-bar_links']}>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className={styles['nav-bar_theme']}>{InactiveThemeIcon()}</div>
    </div>
  );
};

export default Navbar;
