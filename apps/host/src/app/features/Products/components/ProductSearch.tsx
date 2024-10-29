import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { searchTextAtom, searchSizeAtom, searchColorAtom } from '../store';
import { useAtom } from 'jotai';
import { ProductSize, ProductColor } from '@acme/components';

const ProductSearch = () => {
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const [searchSize, setSearchSize] = useAtom(searchSizeAtom);
  const [searchColor, setSearchColor] = useAtom(searchColorAtom);

  return (
    <div className="container mx-auto p-4 text-black dark:text-white">
      <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="text"
              className="p-2 rounded text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
              placeholder="Search Products"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200" />
          </div>
          <select
            className="p-2 rounded text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
            value={searchSize}
            onChange={(e) => setSearchSize(e.target.value as ProductSize)}
          >
            <option value="">Select Size</option>
            {Object.values(ProductSize).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <select
            className="p-2 rounded text-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
            value={searchColor}
            onChange={(e) => setSearchColor(e.target.value as ProductColor)}
          >
            <option value="">Select Color</option>
            {Object.values(ProductColor).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
