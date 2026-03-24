import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Tarefas.css";

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={`${tarefa}-${index}`}>
          <span>{tarefa}</span>
          <div className="acoes">
            <FaEdit onClick={() => handleEdit(index)} className="editar" />
            <FaWindowClose
              onClick={() => handleDelete(index)}
              className="deletar"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
