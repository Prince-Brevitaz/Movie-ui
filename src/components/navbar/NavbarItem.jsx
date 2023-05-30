import PropTypes from "prop-types";
function NavbarItem({ label }) {
  return (
    <div className="text-white text-xl mt-2 cursor-pointer hover:text-gray-400 transition">
      {label}
    </div>
  );
}
//validating props
NavbarItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default NavbarItem;
