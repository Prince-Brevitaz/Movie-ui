import Loader from "./Loader";

function Membership() {
  const tr = false;
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-4">
        <h4 className="text-lg text-[gray]">Membership & Billing</h4>
        <button
          className="
                h-10 
                w-3/5 
                whitespace-nowrap 
                bg-gray-300 
                py-2 
                text-sm 
                font-medium 
                text-black 
                shadow-md 
                hover:bg-gray-200 
                md:w-4/5"
        >
          {tr ? <Loader color="dark:fill-[#e50914]" /> : "Cancel Membership"}
        </button>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between border-b text-white border-white/10 py-4 md:flex-row">
          <div>
            <p className="font-medium">Email: user@gmail.com</p>
            <p className="font-medium">
              Password: <span className="hover:underline cursor-[/src/images/logo.png]">*********</span>
            </p>
          </div>
          <div className="md:text-right text-blue-500">
            <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
              Change email
            </p>
            <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
              Change password
            </p>
          </div>
        </div>

        <div className="flex flex-col text-white justify-between pt-4 pb-4 md:flex-row md:pb-0">
          <div>
            <p>
              12-18-1990 Your membership will end on Your next billing date is
              13-15-1203
            </p>
          </div>
          <div className="md:text-right">
            <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
              Manage payment info
            </p>
            <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
              Add backup payment method
            </p>
            <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
              Billing Details
            </p>
            <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
              Change billing day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
