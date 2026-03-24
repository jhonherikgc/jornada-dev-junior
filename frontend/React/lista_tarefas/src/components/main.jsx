import React, { Component } from "react";
import Form from "./form/Form";
import Tarefas from "./Tarefas/Tarefas";
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

  // salvando no localStorage

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));

    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

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

        {/*Componente form */}
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        {/* Componente de tarefas */}
        <Tarefas
          tarefas={tarefas}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
