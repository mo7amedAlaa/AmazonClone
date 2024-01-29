import { useEffect, useRef, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { allItems } from '../../constants';
import { logo } from '../../assets/index';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserSingOut } from '../../redux/amazonSlice';
import { productSearch } from '../../Api/api';
import { CheckBox, Person2Outlined, Person2Rounded } from '@mui/icons-material';

const Header = () => {
  const auth = getAuth();
  const ref = useRef();
  const [showAll, setShowAll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const products = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const orders = useSelector((state) => state.amazonReducer.orders);
  const dispatch = useDispatch();
  const handleSearch = async () => {
    setSearchResult(await productSearch(searchValue));
    setShowSearch(true);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(UserSingOut());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
      }
      if (!e.target.contains(ref.current)) {
        showSearch && setShowSearch(false);
      }
    });
  }, [ref, showAll, showSearch]);

  return (
    <div className=" pb-5 md:pb-0 lgl:sticky bg-amazon_blue top-0 z-50">
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex  justify-between items-center gap-2 md:gap-4 lgl:gap-2 xl:gap-4">
        {/* ===================== Header Image Start here ======================== */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo} alt="logoImage" />
          </div>
        </Link>
        {/* ===================== Header Image End here ========================== */}
        {/* ===================== Header Deliver Start here ====================== */}
        <div className="hidden md:inline-flex headerHover">
          <LocationOnOutlinedIcon />
          <p className="flex flex-col text-xs text-lightText font-light">
            Deliver to{' '}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Egypt
            </span>
          </p>
        </div>
        {/* ===================== Header Deliver End here ======================== */}
        {/* ===================== Header Search Start here ======================== */}
        <div className="hidden lgl:inline-flex h-10 rounded-md flex-grow relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All{' '}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
          {showAll && (
            <div>
              <ul
                ref={ref}
                key={1}
                className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50"
              >
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSearch();
            }}
            value={searchValue}
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span
            onClick={handleSearch}
            className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
          >
            <SearchIcon />
          </span>
          {showSearch && (
            <div>
              <ul
                ref={ref}
                key={2}
                className="absolute w-[585px] max-h-60  top-[41px] left-[56px] overflow-y-auto   overflow-x-hidden bg-white   border-amazon_blue text-black p-5 flex flex-col gap-1 z-50"
              >
                {searchResult.map((item) => (
                  <Link key={item._id} to={`/details/${item.id}`}>
                    <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* ===================== Header Search End here ========================== */}
        {/* ===================== Header Signin Start here ======================== */}
        <Link to="/signin">
          <div className="flex flex-col items-start justify-center headerHover">
            {userInfo ? (
              <p className="text-sm  flex text-gray-100 font-medium">
                <span className="hidden md:inline">
                  {userInfo.userName.slice(0, 5)}...
                </span>
                <Person2Rounded />
              </p>
            ) : (
              <p className="text-xs text-center text-lightText font-light">
                Hello, sign in
                <Person2Rounded />
              </p>
            )}
          </div>
        </Link>
        {/* ===================== Header Signin End here ========================== */}
        {/* ===================== Header Orders Start here ======================== */}
        <Link to={'/orderdetails'}>
          <div className="  relative flex-col items-start justify-center headerHover">
            <p className="text-xs hidden mdl:flex text-lightText font-light">
              Returns
            </p>
            <p className="text-sm hidden mdl:flex font-semibold -mt-1 text-whiteText">
              & Orders
            </p>
            <span className="md:hidden">
              <CheckBox />
            </span>
            <span className="absolute text-xs top-0 md:left-14 left-5  w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              {orders.length > 0 ? orders.length : 0}
            </span>
          </div>
        </Link>

        {/* ===================== Header Orders End here ========================== */}
        {/* ===================== Header Cart Start here ========================== */}
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold mt-3 text-whiteText">
              Cart
            </p>
            <span className="absolute text-xs top-0 md:left-6 left-5 w-4 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
              {products.length > 0 ? products.length : 0}
            </span>
          </div>
        </Link>
        {/* ===================== Header Cart End here ============================ */}
        {/* ===================== Logout  Start here ============================ */}
        {userInfo && (
          <div
            onClick={handleSignOut}
            className="flex flex-col justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
        <div className="md:hidden  ">
          <HeaderBottom />
        </div>
        {/* ===================== Logout  End here ============================ */}
      </div>
      <div className="lgl:hidden h-10 w-full bg-amazon_blue px-6    inline-flex   ">
        <input
          onChange={(e) => {
            setSearchValue(e.target.value);
            handleSearch();
          }}
          value={searchValue}
          className="h-full text-base text-amazon_blue flex-grow outline-none rounded-l-lg  border-none px-2"
          type="text"
        />
        <span
          onClick={handleSearch}
          className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md"
        >
          <SearchIcon />
        </span>
        {showSearch && (
          <div>
            <ul
              ref={ref}
              key={2}
              className="absolute w-fit max-h-60  top-[107px] left-[27px] overflow-y-auto   overflow-x-hidden bg-white   border-amazon_blue text-black p-5 flex flex-col gap-1 z-50"
            >
              {searchResult.map((item) => (
                <Link key={item._id} to={`/details/${item.id}`}>
                  <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" hidden md:block">
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
