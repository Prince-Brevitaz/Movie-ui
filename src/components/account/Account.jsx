import Membership from "./Membership";

function Account() {
  return (
    <div>
      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl text-white md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="/src/images/membersince.svg" alt="membersince" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#beb5b5]">
              Member since 2011
            </p>
          </div>
        </div>

        <Membership />

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[#beb5b5]">Plan Details</h4>
          {/* Find the current plan */}
          <div className="col-span-2 text-white font-medium">sub plan</div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right">
            Change plan
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[#beb5b5]">Settings</h4>
          <p className="col-span-3 cursor-pointer text-blue-500 hover:underline">
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  );
}

export default Account;
