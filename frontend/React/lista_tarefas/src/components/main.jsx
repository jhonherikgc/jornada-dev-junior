import React, { Component } from "react";
import { FaEdit, FaPlus, FaWindowClose } from "react-icons/fa";

import "./main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };
  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  // adiciona uma tarefa
  handleSubmit = (e) => {
    e.preventDefault();

    const { tarefas, index, novaTarefa } = this.state;
    const tarefa = novaTarefa.trim();

    if (!tarefa) return;

    if (index !== -1) {
      const novasTarefas = [...tarefas];
      novasTarefas[index] = tarefa;

      this.setState({
        tarefas: novasTarefas,
        novaTarefa: "",
        index: -1,
      });
      return;
    }

    if (tarefas.includes(tarefa)) return;

    this.setState({
      tarefas: [...tarefas, tarefa],
      novaTarefa: "",
    });
  };

  // deleta uma tarefa
  handleDelete = (index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: novasTarefas,
    });
  };

  //edita uma tarefa
  handleEdit = (index) => {
    const { tarefas } = this.state;

    this.setState({
      novaTarefa: tarefas[index],
      index,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        {/* Form com os metodos */}
        <form onSubmit={this.handleSubmit} action="#">
          <input
            onChange={this.handleChange}
            placeHolder="Adicione uma tarefa"
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        {/* Lista de tarefas já funcional */}
        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={`${tarefa}-${index}`}>
              <span>{tarefa}</span>
              <div className="acoes">
                <FaEdit
                  onClick={() => this.handleEdit(index)}
                  className="editar"
                />
                <FaWindowClose
                  onClick={() => this.handleDelete(index)}
                  className="deletar"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
