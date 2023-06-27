/* eslint-disable array-callback-return */
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchProduct } from "service/ProductSlice";
import { Link } from "react-router-dom";

const DropdownHeader = () => {
  const [input, setInput] = useState<string>("");

  const product = useAppSelector((state) => state.product.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const productArr = [];

  for (let i = 0; i < product.length; i++) {
    if (product[0] !== undefined) {
      productArr.push(product[i]);
    }
  }

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="dropdown">
      <input
        type="text"
        placeholder="검색"
        className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput"
        onChange={onChangeInput}
        value={input}
      />
      <ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600">
        {productArr.map((item) => {
          if (
            (item.title?.toLowerCase().includes(input) ||
              item.title?.toUpperCase().includes(input)) &&
            input
          ) {
            return (
              <li key={`${item.id}`}>
                <Link
                  to={`/product/${item.id}`}
                  className="text-left js-searchedItem"
                  state={item}
                >
                  <span className="text-gray-600 dark:text-white line-clamp-2">
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default DropdownHeader;
