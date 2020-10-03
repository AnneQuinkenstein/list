import React, { useState, useEffect } from "react";

const Task = ({
  taskName,
  taskCathegory,
  taskId,
  editName,
  handleDelete,
  index,
  listLength,
}) => {
  const [task, setTask] = useState(taskName);
  const [hidden, setHidden] = useState(false);
  const [num, setNum] = useState(listLength);
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
    const randNum = Math.random() * 70;
    const randNum2 = Math.random() * 80;
    setStyle({
      zIndex: index,
      top: `${randNum}%`,
      left: `${randNum2}%`,
    });
  }, []);

  const handleIndex = (e) => {
    setStyle({
      zIndex: num,
      top: "style[top]",
      left: "style[left]",
    });
    setNum(num + num);
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
        return "yellow";
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
