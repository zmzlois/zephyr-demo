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
      <SunIcon
        className="h-8 w-8 cursor-pointer text-yellow-400"
        onClick={onClick}
      />
    ) : (
      <MoonIcon
        className="h-8 w-8 cursor-pointer text-gray-600"
        onClick={onClick}
      />
    );
  };

  return (
    <nav className="flex justify-between items-center h-20 px-4 text-gray-700 bg-white dark:bg-gray-800 dark:text-white shadow-md">
      <div className="text-2xl font-bold border-r border-gray-300 dark:border-gray-600 pr-4">
        <Link to="/">Elite T-Shirts</Link>
      </div>
      <div className="flex-1 flex gap-4 ml-4 text-xl">
        <Link
          to="/products"
          className="hover:text-gray-900 dark:hover:text-gray-300"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="hover:text-gray-900 dark:hover:text-gray-300"
        >
          Cart
        </Link>
        <Link
          to="/favorites"
          className="hover:text-gray-900 dark:hover:text-gray-300"
        >
          Favorites
        </Link>
      </div>
      <div className="ml-4">{InactiveThemeIcon()}</div>
    </nav>
  );
};

export default Navbar;
