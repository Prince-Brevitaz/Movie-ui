import PropTypes from "prop-types";

function MobileMenu({ isVisible }) {
  return isVisible ? (
    <div className="bg-black text-xl w-56 absolute top-10 -left-12 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          Featured
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Series
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Movies
        </div>
        <div className="px-3 text-center text-white hover:underline">
          My List
        </div>
      </div>
    </div>
  ) : null;
}

//validating props
MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
export default MobileMenu;
