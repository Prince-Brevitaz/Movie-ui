import PropTypes from "prop-types";
function Input({ id, onChange, value, label, type }) {
  return (
    <div className="relative">
      <input
        id={id}
        onChange={onChange}
        value={value}
        type={type}
        className="
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-base
          text-white
          bg-neutral-700
          appearance-none
          focus:outline-none
          focus:right-0
          peer
          "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
          absolute 
          text-2xl
          text-zinc-400 
          duration-150 
          transform 
          -translate-y-3
          scale-75 
          top-3
          z-10 
          origin-[0]
          left-6 
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-3
          "
      >
        {label}
      </label>
    </div>
  );
}

//validating props
Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.any.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
