import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const FooterTop = () => {
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);
  const navigate = useNavigate();
  return (
    !userInfo && (
      <div className="w-full bg-white py-6">
        <div className="w-full border-t-[1px] border-b-[1px] py-8">
          <div className="w-64 mx-auto text-center font-titleFont">
            <p className="text-sm">See personalized recommendations</p>
            <button
              onClick={() => navigate('/signin')}
              className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700"
            >
              Sign In
            </button>
            <p className="text-xs mt-1">
              New Customber?{' '}
              <Link to={'/registration'}>
                <span className="text-blue-600 ml-1 cursor-pointer">
                  Strat here.
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default FooterTop;
