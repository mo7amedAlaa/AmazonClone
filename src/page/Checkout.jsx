import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeOrder } from '../redux/amazonSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EmailOutlined } from '@mui/icons-material';

const Checkout = () => {
  const dispatch = useDispatch();
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [bankName, setBankName] = useState('no');
  const [CardNum, setCardNum] = useState('00000000000000');
  const [orderDone, setOrderDone] = useState(false);
  const [errFname, setErrFname] = useState('');
  const [errLName, setErrLname] = useState('');
  const [errEmail, setErrEmail] = useState('');
  const [errCountry, setErrCountry] = useState('');
  const [errStreet, setErrStreet] = useState('');
  const [errPaymentMethod, setErrPaymentMethod] = useState('');
  const [errBankName, setErrBankName] = useState('');
  const [errCardNum, setErrCardNum] = useState('');
  const handleFname = (e) => {
    setFname(e.target.value);
    setErrFname('');
  };
  const handleLname = (e) => {
    setLname(e.target.value);
    setErrLname('');
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail('');
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry('');
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
    setErrStreet('');
  };
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
    setErrPaymentMethod('');
  };
  const handleCardNum = (e) => {
    setCardNum(e.target.value);
    setErrCardNum('');
  };
  const handleBankName = (e) => {
    setBankName(e.target.value);
    setErrBankName('');
  };
  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  function is_all_num(string) {
    return /^\d+$/.test(string);
  }
  const handleCheckout = (e) => {
    e.preventDefault();
    if (!fName) {
      setErrFname('Enter your frist name');
    }
    if (!lName) {
      setErrLname('Enter your last name');
    }
    if (!email) {
      setErrEmail('Enter your email');
    } else {
      if (!emailValidation(email)) {
        setErrEmail('Enter a valid email');
      }
    }
    if (!country) {
      setErrCountry('Enter your Country');
    }
    if (!CardNum) {
      setErrCardNum('Enter your CardNum');
    } else {
      if (CardNum.length < 14 || CardNum.length > 14) {
        setErrCardNum('CardNum must be 14 Number');
      } else {
        if (is_all_num(CardNum) == false) {
          setErrCardNum('curdNum must be 14 number   ');
        }
      }
    }
    if (!bankName) {
      setErrBankName('Enter your Bank Name');
    }
    if (!paymentMethod) {
      setErrPaymentMethod('Choose your payment method');
    }
    if (!street) {
      setErrStreet('Enter your Street');
    }

    if (
      fName &&
      lName &&
      email &&
      emailValidation(email) &&
      street &&
      country &&
      bankName &&
      paymentMethod &&
      CardNum &&
      CardNum.length == 14 &&
      is_all_num(CardNum)
    ) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 3);
      dispatch(
        makeOrder({
          fristName: fName,
          lristName: lName,
          email: email,
          country: country,
          street: street,
          paymentMethod: paymentMethod,
          bankName: bankName,
          cardNum: CardNum,
          Delived: `${currentDate}`,
        })
      );
      setOrderDone(true);
      setFname('');
      setLname('');
      setEmail('');
      setCountry('');
      setErrStreet('');
      setBankName('');
      setCardNum('');
      setPaymentMethod('');
      console.log('checkout done');
    }
  };
  return (
    <div>
      {!orderDone ? (
        <div className="p-10">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <p className="mt-1 text-center text-sm md:text-xl leading-6 text-gray-700">
                  This information will be used to Tracking Order ,be careful
                  what you share.
                </p>
              </div>

              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Personal Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleFname}
                        value={fName}
                        type="text"
                        name="first-name"
                        required
                        id="first-name"
                        placeholder="Enter Your Name "
                        autoComplete="given-name"
                        className="block w-full p-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                        {errFname}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleLname}
                        value={lName}
                        type="text"
                        placeholder="Enter Your Name "
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full p-2  focus:outline-none  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                        {errLName}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      <EmailOutlined />
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleEmail}
                        value={email}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Your Email which recived notifications about Order status "
                        required
                        autoComplete="email"
                        className="block w-full p-2  focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                        {errEmail}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <select
                        onChange={handleCountry}
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full focus:outline-none  p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value={null} disabled selected>
                          select country
                        </option>
                        <option value={'egypt'}>Egypt</option>
                        <option value={'oman'}>oman</option>
                        <option value={'us'}>United States</option>
                        <option value={'canada'}>Canada</option>
                        <option value={'mexico'}>Mexico</option>
                      </select>
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                        {errCountry}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleStreet}
                        value={street}
                        type="text"
                        name="street-address"
                        id="street-address"
                        placeholder="Enter your Full Address"
                        required
                        autoComplete="street-address"
                        className="block w-full p-2 focus:outline-none  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                        {errStreet}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2">
                    <select
                      onChange={handlePaymentMethod}
                      id="payment"
                      name="payment"
                      autoComplete="payment-name"
                      className="block mx-auto w-full focus:outline-none   p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value={null} disabled selected>
                        paymentMethod
                      </option>
                      <option value={'cash'}>cash</option>
                      <option value={'debit'}>debit card</option>
                      <option value={'credit'}>credit card</option>
                    </select>
                    <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                      {errPaymentMethod}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Bank Name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleBankName}
                        value={bankName}
                        type="text"
                        name="region"
                        id="region"
                        placeholder="eg:- Masr bank, Alahly ,QNB,...."
                        disabled={paymentMethod == 'cash' ? true : false}
                        autoComplete="address-level1"
                        className="block w-full p-2 focus:outline-none  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                        {errBankName}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      card-number
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={handleCardNum}
                        value={CardNum}
                        type="text"
                        disabled={paymentMethod == 'cash' ? true : false}
                        name="postal-code"
                        placeholder="enter your card Number"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full p-2 focus:outline-none  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 mt-1.5">
                        {errCardNum}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                onClick={handleCheckout}
                className="rounded-md focus:outline-none  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div className="w-96 p-4 bg-white flex  flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-green-600  text-xl font-bold">
              Check Out Done successfully
            </h1>
            <p className="text-sm text-center">
              Your Order Done and store in Order page serve. with your product
              and your form information Go to see.
            </p>
            <Link to="/">
              <button className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg">
                continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Checkout;
