import "../../style/components/todoSuggest.css"
import PropTypes from 'prop-types';

function TodoSuggest({ content, icon, background }) {
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

TodoSuggest.propTypes = {
  content: PropTypes.string,
  icon: PropTypes.string,
  background: PropTypes.string
};

export default TodoSuggest;
