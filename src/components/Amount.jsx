import React, { useState } from 'react'

import './Amount.css'

export default props => {
  const dateCalculator = () => {
    const currentDate = new Date()
    const birthdayDate = new Date(
      `${props.data.year}-${props.data.month}-${props.data.day}`
    )

    let ageYears = currentDate.getFullYear() - birthdayDate.getFullYear()
    let ageMonths = currentDate.getMonth() - birthdayDate.getMonth()
    let ageDays = currentDate.getDate() - birthdayDate.getDate()

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--
      ageMonths += 12
    }

    if (ageDays < 0) {
      const lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      )
      ageDays += lastMonthDate.getDate()
      ageMonths--
    }

    if (ageYears < 0) {
      ageYears = '--'
      ageMonths = '--'
      ageDays = '--'
    }

    if (isNaN(ageDays) || isNaN(ageMonths)) {
      ageYears = '--'
      ageMonths = '--'
      ageDays = '--'
    }

    const finalDate = [ageYears, ageMonths, ageDays]

    return finalDate
  }

  return (
    <div className="amount">
      <p>
        <span> {props.data.year == 0 ? '-- ' : dateCalculator()[0]} </span>{' '}
        years
      </p>

      <p>
        <span> {props.data.month == 0 ? '-- ' : dateCalculator()[1]} </span>{' '}
        months
      </p>

      <p>
        <span> {props.data.day == 0 ? '-- ' : dateCalculator()[2]} </span> days
      </p>
    </div>
  )
}
