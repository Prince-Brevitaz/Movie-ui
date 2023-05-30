import { useNavigate,Link } from "react-router-dom";
import PropTypes from "prop-types";

function AccountMenu({ isVisible }) {
  const navigate = useNavigate();
  return isVisible ? (
    <div className="bg-black w-56 absolute top-14 -right-5 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-2">
        <div className="px-5 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/src/images/default-blue.png"
            alt="profile"
          />
          <Link to="/account"><p className="text-white text-base font-semibold group-hover/item:underline">
            username
          </p></Link>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => navigate("/login")}
          className="pt-0 text-center text-white text-lg hover:underline"
        >
          Sign Out
        </div>
      </div>
    </div>
  ) : null;
}

// validating props
AccountMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default AccountMenu;
