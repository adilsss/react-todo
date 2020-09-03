import React, { Component } from 'react';
import Task from '../Task/Task';

export default class List extends Component {
  state = {
    filteredTasks: [],
    ifFiltered: false
  };

  applyFilter = type => {
    const tasks = this.props.tasks;

    if (type === 'success') {
      return this.setState({
        filteredTasks: tasks.filter(task => task.isCompleted),
        isFiltered: true
      });
    }
    if (type === 'unsuccess') {
      return this.setState({
        filteredTasks: tasks.filter(task => !task.isCompleted),
        isFiltered: true
      });
    }

    return this.setState({ filteredTasks: [], isFiltered: false });
  };

  componentDidUpdate(prevProps) {
    if (this.props.filterType !== prevProps.filterType) {
      this.applyFilter(this.props.filterType);
    }
  }

  render() {
    let tasks = this.state.isFiltered
      ? this.state.filteredTasks
      : this.props.tasks;
    return (
      <div>
        {tasks.map(task => (
          <Task
            deleteTask={this.props.deleteTask}
            changeTaskStatus={this.props.changeTaskStatus}
            id={task.id}
            isCompleted={task.isCompleted}
            key={task.id}
            text={task.text}
          />
        ))}
        {tasks.length === 0 && <h3>Nothing...</h3>}
      </div>
    );
  }
}
