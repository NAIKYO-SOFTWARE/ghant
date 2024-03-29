import './todoSugges.css';


function TodoSugges({ content, icon,background }) {
  return (
    <>
      <div className="div" style={{backgroundColor: background}}>
        <div className="div-2">
          <div className="div-3">{icon}</div>
          <div className="div-4">{content}</div>
        </div>    
      </div>
      
    </>
  );
}

export default TodoSugges