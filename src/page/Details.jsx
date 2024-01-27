import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productDetails } from '../Api/api';
import { addToCart } from '../redux/amazonSlice';
import { useDispatch } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Details() {
  const [product, setProduct] = useState(null);
  const ID = useParams().id;
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    productDetails(ID).then((product) => setProduct(product));
  }, [ID]);
  return (
    <div className="bg-gray-100  w-full dark:bg-gray-800 py-8">
      <div className=" mx-auto w-full px-4 sm:px-6 lg:px-8">
        {product && (
          <div className="flex flex-col w-full md:flex-row mx-4">
            <div className="md:flex-1  md:w-1/4  px-4">
              <div className="h-[400px] md:w-full p-10 rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <Slider {...settings}>
                  {product.images.map((csrc, i) => (
                    <div
                      className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 px-5"
                      key={i}
                    >
                      <img
                        className="w-full h-[300px] rounded-sm "
                        src={csrc}
                        alt="Product Image"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex -mx-2 mb-4">
                <div className=" flex-1 px-2">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product.id,
                          title: product.title,
                          description: product.description,
                          price: product.price,
                          category: product.category,
                          images: product.images,
                          quantity: 1,
                        })
                      )
                    }
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-3 my-5">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                ProductName:
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product.title}
              </p>
              <div className="flex sm:flex-col sm:gap-5 mb-4">
                <div className="mr-4">
                  <span className="font-bold text-xl mr-1 text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300 mr-1">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.stock}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Product Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product.description}
                </p>
              </div>
              <div className="flex sm:flex-col sm:gap-5 my-4 ">
                <div className="mr-4">
                  <span className="font-bold text-xl mr-1 text-gray-700 dark:text-gray-300">
                    Category:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.category}
                  </span>
                </div>
                <div>
                  <span className="font-bold  text-gray-700 dark:text-gray-300 mr-1">
                    DiscountPercentage:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.discountPercentage}%
                  </span>
                </div>
              </div>
              <div className="flex  items-center gap-3">
                <span className="font-bold text-gray-700 dark:text-gray-300 mr-1">
                  Rating:
                </span>
                <span className="text-gray-600 dark:text-gray-300  ">
                  {product.rating}
                </span>
                <span className="text-yellow-500 h-1/4 flex">
                  <StarIcon />
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Details;
