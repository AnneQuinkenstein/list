import React, { useState, useEffect } from "react";

const Task = ({
  taskName,
  taskCathegory,
  taskId,
  editName,
  handleDelete,
  index,
  zIndexNum,
  countNum
}) => {
  const [task, setTask] = useState(taskName);
  const [hidden, setHidden] = useState(false);
  const [style, setStyle] = useState({
    zIndex: index,
    top: "",
    left: "",
  });

  const handleEdit = (task, index) => {
    if (hidden === true) {
      editName(task, index);
    }
    setHidden(!hidden);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    const randNum = Math.random() * 50+10;
    const randNum2 = Math.random() * 80+1.5;
    setStyle({
      zIndex: index,
      top: `${randNum}vh`,
      left: `${randNum2}vw`,
    });
  }, []);

  const handleIndex = (e) => {
    setStyle({
      zIndex: zIndexNum,
      top: "style[top]",
      left: "style[left]",
    });
    console.log(zIndexNum);
    countNum(); 
    e.preventDefault();
  };

  const renderColor = (Cat) => {
    switch (Cat) {
      case "Familie":
        return "yellow";
      case "Haushalt":
        return "green";
      case "Urlaub":
        return "purple";
      case "Selbstoptimierung":
        return "green";
      case "Lohnarbeit":
        return "green";
      case "Liebesleben":
        return "purple";
      case "Freizeit":
        return "red";
      case "Finanzen":
        return "yellow";
      case "sonstso":
        return "purple";
      default:
        return "yellow";
    }
  };
  
  return (
    <div
      onClick={handleIndex}
      style={style}
      className={renderColor(taskCathegory)}
    >
      <a href={taskId}>
        <h2>{taskCathegory}</h2>
        <p className={hidden ? "hidden" : "visible"}>{taskName}</p>
        <p className={hidden ? "visible" : "hidden"}>
          {" "}
          <textarea 
            onChange={handleChange}
            type="text"
            name="task"
            value={task}
            className="editTask"
          ></textarea >
        </p>
        <div className="button">
          <button className="deleteButton" onClick={() => handleDelete(taskId)}>
            <i class="material-icons">delete</i>
          </button>
          <button
            className="editButton"
            onClick={() => handleEdit(task, index)}
          >
            {hidden ? (
              <i class="material-icons">check_circle</i>
            ) : (
              <i class="material-icons">border_color</i>
            )}{" "}
          </button>
        </div>
      </a>
    </div>
  );
};

export default Task;
