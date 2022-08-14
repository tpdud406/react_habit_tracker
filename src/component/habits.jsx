import React, { PureComponent } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';
/*아무것도 가지고 있지 않은 빈 깡통 컴포넌트
다만 상위로 부터 받은 prop(habits)배열을 map으로 빙글빙글 돌면서 habit컴포넌트에 prop전달*/

class Habits extends PureComponent {
  render() {
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
