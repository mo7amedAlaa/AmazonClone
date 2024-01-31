import { Link, useLoaderData } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/amazonSlice';
import { useState } from 'react';

const Products = () => {
  const data = useLoaderData();
  const productsData = data;
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const [signinErr, setSingInErr] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 px-4">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
        >
          <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
            {item.category}
          </span>
          {/* ========== Product Image Start here ============== */}
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              className="w-52 h-64 object-contain"
              src={item.images[0]}
              alt="ProductImg"
            />
            {/* ================== Product mini drop down Start here ============ */}
            <ul className="absolute w-full h-25 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2">
              <li
                className="productLi"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      price: item.price,
                      category: item.category,
                      images: item.images,
                      stock: item.stock,
                      rating: item.rating,
                      discountPercentage: item.discountPercentage,
                      quantity: 1,
                    })
                  )
                }
              >
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <Link
                className="block w-full"
                key={item._id}
                to={`/details/${item.id}`}
              >
                <li className="productLi">
                  View Details{' '}
                  <span>
                    <ArrowCircleRightIcon />
                  </span>
                </li>
              </Link>
            </ul>
            {/* ================== Product mini drop down End here ============== */}
          </div>
          {/* ========== Product Image End here ================ */}
          {/* ========== Product Info Start here =============== */}
          <div className="px-4  bg-white flex flex-col gap-1 z-10">
            <div className="flex items-center  justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${item.price}
              </p>
            </div>
            <div className="h-[100px]">
              <p className="text-sm h-3/4">
                {item.description.substring(0, 100)}
              </p>
              <div className="text-yellow-500 h-1/4 flex">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button
              onClick={() => {
                if (userInfo) {
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      description: item.description,
                      price: item.price,
                      category: item.category,
                      images: item.images,
                      stock: item.stock,
                      rating: item.rating,
                      discountPercentage: item.discountPercentage,
                      quantity: 1,
                    })
                  );
                } else {
                  setSingInErr(true);
                }
              }}
              className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-300 to hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200"
            >
              {signinErr == false ? 'Add to Cart ' : 'Sign in To Add To Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
