import { emptyCart } from '../../assets';
function ErrorPage() {
  return (
    <div className="w-screen h-screen  bg-slate-400  gap-10 flex  flex-col items-center justify-center">
      <div>
        <img src={emptyCart} alt="error" />
      </div>
      <p className="font-semibold capitalize tracking-[.5rem] text-2xl text-center  sm:text-lg  text-red-700     ">
        sorry,you may have <br />
        <span className="text-4xl mt-5 block ">error!</span>
      </p>
    </div>
  );
}

export default ErrorPage;
