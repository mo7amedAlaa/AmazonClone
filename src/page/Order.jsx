import { useSelector } from 'react-redux';

export default function Order() {
  const orders = useSelector((state) => state.amazonReducer.orders);

  return (
    <>
      {orders.map((order, i) => {
        return (
          <div key={i}>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
              <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                  Order Number:
                </h1>
                <p className=" text-2xl dark:text-gray-500 font-medium leading-6 text-gray-600">
                  {i + 1}
                </p>
              </div>
              <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                      Order product
                    </p>
                    {order.products.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full"
                        >
                          <div className="pb-4 md:pb-8 w-full md:w-40">
                            <img
                              className="w-full hidden md:block"
                              src={product.images[0]}
                              alt="dress"
                            />
                            <img
                              className="w-full md:hidden"
                              src={product.images[0]}
                              alt="dress"
                            />
                          </div>
                          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                {product.title}
                              </h3>
                              <div className="flex justify-start items-start flex-col space-y-2">
                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                  <span className="dark:text-gray-400 text-gray-300">
                                    description:{' '}
                                  </span>{' '}
                                  {product.description}
                                </p>
                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                  <span className="dark:text-gray-400 text-gray-300">
                                    quantity:{' '}
                                  </span>{' '}
                                  {product.quantity}
                                </p>
                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                  <span className="dark:text-gray-400 text-gray-300">
                                    category:{' '}
                                  </span>{' '}
                                  {product.category}
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between space-x-8 items-start w-full">
                              <p className="text-base dark:text-white xl:text-lg leading-6">
                                {product.price}
                                <span className="text-red-300 line-through">
                                  {' '}
                                  {product.price + 30}
                                </span>
                              </p>
                              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                                {product.quantity}
                              </p>
                              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                {product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                      Shipping && Delived Date
                    </h3>
                    <div className="flex justify-between items-start w-full">
                      <div className="flex justify-center items-center space-x-4">
                        <div className="w-8 h-8">
                          <img
                            className="w-full h-full"
                            alt="logo"
                            src="https://i.ibb.co/L8KSdNQ/image-3.png"
                          />
                        </div>
                        <div className="flex flex-col justify-start items-center">
                          <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">
                            DPD Delivery
                            <br />
                            <span className="font-normal">
                              Delivery with {order.info.Delived}
                            </span>
                          </p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold leading-6 dark:text-white text-gray-800">
                        $8.00
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                  <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                    Customer
                  </h3>
                  <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                      <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                        <img
                          src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                          alt="avatar"
                        />
                        <div className="flex justify-start items-start flex-col space-y-2">
                          <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                            {order.info.firstname + order.info.lristName}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3 7L12 13L21 7"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="cursor-pointer text-sm leading-5 ">
                          {order.info.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                      <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                        Address
                      </p>
                      <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        {order.info.street}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
