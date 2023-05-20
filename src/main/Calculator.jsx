import React, { Component } from "react";

import './Calculator.css'

import Display from '../components/Display'

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <Display/>
      </div>
    )
  }
}