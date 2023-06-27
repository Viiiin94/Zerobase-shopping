import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductCartType } from "types/product";

const Product = () => {
  const [value, setValue] = useState<string>("");
  const [counting, setCounting] = useState<number>(1);
  const {
    id,
    category,
    description,
    image,
    price,
    title,
    rating,
  }: ProductCartType = useLocation().state;

  useEffect(() => {
    if (category === "men's clothing" || category === "women's clothing") {
      setValue("패션");
    } else if (category === "jewelery") {
      setValue("액세서리");
    } else if (category === "electronics") {
      setValue("디지털");
    }
  }, [value, category]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCounting(parseInt(e.target.value));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cartArr = [
      { id: id, title: title, image: image, price: price, counting: counting },
    ];
    localStorage.setItem(`${id}`, JSON.stringify(cartArr));
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto dark:text-gray-200">
      <div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>{value}</li>
            <li>{title}</li>
          </ul>
        </div>
        <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img
              src={image}
              alt={title}
              className="object-contain w-full h-72"
            />
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{description}</p>
            <div className="flex items-center mt-3">
              <div className="rating rating-half"></div>
              <div className="ml-2">
                {rating.rate} / {rating.count} 참여
              </div>
            </div>
            <p className="mt-2 mb-4 text-3xl">${price}</p>
            <div className="card-actions">
              <label
                htmlFor="confirm-modal"
                className="modal-button btn btn-primary "
              >
                장바구니에 담기
              </label>
              <Link
                to="/cart"
                className="btn btn-outline ml-1 dark:text-gray-200"
              >
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box dark:bg-gray-500">
          <h3 className="font-bold text-lg">장바구니에 담겠습니까?</h3>
          <p className="py-4">몇개를 구하겠습니까?</p>
          <form className="modal-action dark:text-gray-200" onSubmit={onSubmit}>
            <input
              type="number"
              min={1}
              max={9}
              onChange={onChange}
              className="border pl-4 rounded-lg dark:text-gray-900"
              placeholder="0"
            />
            <button className="btn btn-primary">
              <label htmlFor="confirm-modal">네</label>
            </button>
            <label
              htmlFor="confirm-modal"
              className="btn btn-outline dark:text-gray-200"
            >
              아니오
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Product;
