import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Theme/ThemeProvider';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const InactiveThemeIcon = () => {
    const onClick = () => toggleTheme();

    return theme === 'dark' ? (
      <SunIcon
        className="h-8 w-8 cursor-pointer text-yellow-400 hover:text-yellow-300"
        onClick={onClick}
      />
    ) : (
      <MoonIcon
        className="h-8 w-8 cursor-pointer text-gray-600 hover:text-gray-700"
        onClick={onClick}
      />
    );
  };

  return (
    <nav className="flex justify-between items-center h-20 px-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md">
      <div className="text-2xl font-bold border-r border-gray-300 dark:border-gray-600 pr-4">
        <Link
          to="/"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          Elite T-Shirts
        </Link>
      </div>
      <div className="flex-1 flex gap-4 ml-4 text-xl">
        <Link
          to="/products"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          Products
        </Link>
        <Link
          to="/cart"
          className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          Cart
        </Link>
      </div>
      <div className="ml-4">{InactiveThemeIcon()}</div>
    </nav>
  );
};

export default Navbar;
