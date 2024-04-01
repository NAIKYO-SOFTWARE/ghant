import './todoSugges.css';
import PropTypes from 'prop-types';

function TodoSugges({ content, icon, background }) {
  return (
    <>
      <div className="div" style={{ backgroundColor: background }}>
        <div className="div-2">
          <div className="div-3">{icon}</div>
          <div className="div-4">{content}</div>
        </div>
      </div>
    </>
  );
}

TodoSugges.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
  background: PropTypes.string
};

export default TodoSugges;
