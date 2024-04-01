import '../../style/components/button.css';
import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
