import { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  state = {
    items: ['prev'],
  };

  add = e => {
    return this.setState(prevState => {
      return {
        items: [...prevState.items, e.target.value],
      };
    });
  };

  render() {
    return (
      <div className="todo">
        <input onInput={this.add} />
        <ul className="list">
          {this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
