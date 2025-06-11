import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-white">📝 Blog Web</h1>
      <button
        className="bg-white dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
        onClick={toggleTheme}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
