"use client"
import React, { useState, useEffect  } from "react";
import "./style.css";
import Navbar from "../../_components/Navbar";

const Board = () => {
  const [backlog, setBacklog] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [newTicket, setNewTicket] = useState(""); 

  useEffect(() => {
    const storedBacklog = JSON.parse(localStorage.getItem("backlog")) || [];
    const storedInProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
    const storedCompleted = JSON.parse(localStorage.getItem("completed")) || [];

    setBacklog(storedBacklog);
    setInProgress(storedInProgress);
    setCompleted(storedCompleted);
  }, []);

  // Save data to local storage whenever any of the state variables change
  useEffect(() => {
    localStorage.setItem("backlog", JSON.stringify(backlog));
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [backlog, inProgress, completed]);

  const handleAddTicket = () => {
    if (newTicket.trim() !== "") {
      setBacklog([...backlog, newTicket]);
      setNewTicket("");
    }
  };

  // Pass the ticketName and sourceColumn name via dataTransfer
  const handleDragStart = (e, task, sourceColumn) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("sourceColumn", sourceColumn);
  };

  // Receive the ticketName and sourceColumn name via dataTransfer
  // Push the ticketName to targetColumn array and remove it from sourceColumn
  const handleDrop = (e, targetColumn) => {
    const task = e.dataTransfer.getData("task");
    const sourceColumn = e.dataTransfer.getData("sourceColumn");

    if (targetColumn !== sourceColumn) {
      switch (targetColumn) {
        case "Backlog":
          setBacklog([...backlog, task]);
          break;
        case "InProgress":
          setInProgress([...inProgress, task]);
          break;
        case "Completed":
          setCompleted([...completed, task]);
          break;
        default:
          break;
      }

      switch (sourceColumn) {
        case "Backlog":
          setBacklog(backlog.filter((t) => t !== task));
          break;
        case "InProgress":
          setInProgress(inProgress.filter((t) => t !== task));
          break;
        case "Completed":
          setCompleted(completed.filter((t) => t !== task));
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
    <Navbar/>
      <div className="add-ticket">
        <input
          type="text"
          value={newTicket}
          onChange={(e) => setNewTicket(e.target.value)}
          placeholder="Enter new ticket"
        />
        <button onClick={handleAddTicket}>Add Ticket</button>
      </div>

      <div className="kanban-board">
        <Column
          title="Backlog"
          tasks={backlog}
          onDrop={(e) => handleDrop(e, "Backlog")}
          onDragStart={handleDragStart}
        />
        <Column
          title="InProgress"
          tasks={inProgress}
          onDrop={(e) => handleDrop(e, "InProgress")}
          onDragStart={handleDragStart}
        />
        <Column
          title="Completed"
          tasks={completed}
          onDrop={(e) => handleDrop(e, "Completed")}
          onDragStart={handleDragStart}
        />
      </div>
    </>
  );
};

export default Board;

const Column = ({ title, tasks, onDrop, onDragStart }) => {
  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="task"
          draggable
          onDragStart={(e) => onDragStart(e, task, title)}
        >
          {task}
        </div>
      ))}
    </div>
  );
};
