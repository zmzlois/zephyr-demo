import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { searchTextAtom, searchSizeAtom, searchColorAtom } from '../store';
import { useAtom } from 'jotai';
import { ProductSize, ProductColor } from '../../../types/Products';

const ProductSearch = () => {
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const [searchSize, setSearchSize] = useAtom(searchSizeAtom);
  const [searchColor, setSearchColor] = useAtom(searchColorAtom);

  return (
    <div className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <input
            type="text"
            className="p-2 rounded text-lg border border-gray-300  dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Products"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-3 text-gray-400 dark:text-gray-300" />
        </div>
        <select
          className="p-2 rounded text-lg border border-gray-300 dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500 theme-dropdown"
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
          className="p-2 rounded text-lg border border-gray-300 dark:text-white w-full focus:outline-none focus:ring-2 focus:ring-blue-500 theme-dropdown"
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
  );
};

export default ProductSearch;
