import React, { Component } from 'react';
import Control from '../Control/Control';
import List from '../List/List';
import style from './App.module.css';

export default class App extends Component {
  state = {
    tasks: [
      {
        id: Date.now().toString(),
        text: 'Drink some tea',
        isCompleted: false
      }
    ],
    filterType: 'all'
  };

  addTask = value => {
    if (!value) return 0;
    else {
      const task = {
        id: Date.now().toString(),
        text: value,
        isCompleted: false
      };
      this.setState({ tasks: [...this.state.tasks, task] });
    }
  };

  handleTaskStatusChange = (id, isCompleted) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isCompleted } : task
    );
    this.setState({ tasks: updatedTasks });
  };

  deleteTask = id => {
    const { tasks } = this.state;
    const filteredTasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks: filteredTasks
    });
  };

  handleFilterType = type => {
    return this.setState({
      filterType: type
    });
  };

  render() {
    return (
      <div className={style.container}>
        <Control
          addTask={this.addTask}
          handleFilterType={this.handleFilterType}
        />
        <List
          tasks={this.state.tasks}
          changeTaskStatus={this.handleTaskStatusChange}
          deleteTask={this.deleteTask}
          filterType={this.state.filterType}
        />
      </div>
    );
  }
}
