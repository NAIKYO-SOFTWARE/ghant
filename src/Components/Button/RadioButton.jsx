import PropTypes from 'prop-types';


function Radio({ onClick }) {
    return (
        <input type="radio" value="option1" onClick={onClick} />
    );
}

Radio.propTypes = {
    onClick: PropTypes.func
}

export default Radio