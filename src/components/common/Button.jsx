import PropTypes from 'prop-types';

const Button = ({ classname, text = 'Explore Now' }) => {
  return (
    <div>
      <button
        className={`${classname} bg-black text-white py-3.5 px-12 uppercase font-bold hover:-translate-y-2 duration-500`}
      >
        {text}
      </button>
    </div>
  );
};

Button.propTypes = {
  classname: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Button;
