// import { useState } from "react";

/* eslint-disable react/prop-types */
export default function TodoCard({ todoObject }) {
  const descriptionLength = 50;

  return (
    <div id="todo-card">
      <div id="todo-header">
        <h2>{todoObject.title}</h2>
      </div>
      <div id="todo-body">
        <p>
          {todoObject.description.length > descriptionLength
            ? `${todoObject.description.substring(0, descriptionLength)}...`
            : todoObject.description}
        </p>
        <img
          src={todoObject.imgSrc}
          alt={`image of the task :${todoObject.title}`}
        />
      </div>

      <div id="todo-footer">
        <h5>
          Priority: <span>{todoObject.priority}</span>
        </h5>
        <h5>
          Status: <span>{todoObject.status}</span>
        </h5>
        <h5>
          Created on: <span>{todoObject.createdOn}</span>
        </h5>
      </div>
    </div>
  );
}
