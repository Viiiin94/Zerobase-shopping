import { Link } from "react-router-dom";

const Skleton = () => {
  const skeletonArr = [1, 2, 3, 4];

  return (
    <>
      {skeletonArr.map((item, idx) => {
        return (
          <Link
            to={`/`}
            className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
            key={`_${item}_${idx}_`}
          >
            <figure className="flex h-80 bg-white overflow-hidden">
              <div></div>
            </figure>
            <div className="card-body bg-gray-100 dark:bg-gray-700">
              <p className="card-title text-base"></p>
              <p className="text-base"></p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Skleton;
