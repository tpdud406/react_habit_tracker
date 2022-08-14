import React, { PureComponent } from 'react';
//얘도 따로 자체 state를 갖고 있지 않고 prop으로 받은 값을 보여줌
class Habit extends PureComponent {
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };


  render() {
    /*외부로 부터 받은 prop 이 render함수에서 console찍으면 확인가능
    // console.log(this.props) */
    /*한 단위가 list형식으로 들어갈거라li로 묶어 리턴*/
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
