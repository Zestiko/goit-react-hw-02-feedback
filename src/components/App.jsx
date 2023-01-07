import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));    
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let tottalFeedback = good + neutral + bad;
    return Math.round(100 * good / tottalFeedback);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div className="button-list">
          <button name='good' type='button' onClick={this.handleClick}>good</button>
          <button name='neutral' type='button' onClick={this.handleClick}>Neutral</button>
          <button name='bad' type='button'onClick={this.handleClick}>bad</button>
        </div>
        <Statistics />
      </div>  
  );
  }
};
