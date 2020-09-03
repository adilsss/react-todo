import React, { Component } from 'react';
import { Button, Checkbox } from '@material-ui/core';
import style from './Task.module.css';

export default class Task extends Component {
  state = {
    isChecked: this.props.isCompleted
  };

  handleCheckBox = id => {
    this.setState(
      prevState => ({ isChecked: !prevState.isChecked }),
      () => this.props.changeTaskStatus(id, this.state.isChecked)
    );
  };

  handleDeleteButton = id => {
    this.props.deleteTask(id);
  };

  render() {
    return (
      <div className={style['task-container']}>
        <div className={style.task}>
          <Checkbox
            color='default'
            defaultChecked={this.props.isCompleted}
            onChange={() => this.handleCheckBox(this.props.id)}
          />
          <span className={this.props.isCompleted ? style.done : ''}>
            {this.props.text}
          </span>
          <Button
            className={style['btn-delete']}
            variant='contained'
            color='secondary'
            onClick={() => this.handleDeleteButton(this.props.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    );
  }
}
