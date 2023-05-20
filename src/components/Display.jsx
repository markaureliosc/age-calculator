import React, { useState } from 'react'

import './Display.css'

import Amount from './Amount'

export default props => {
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: ''
  })

  const [dateUpdated, setDateUpdated] = useState(date)

  const [styleInputDay, setStyleInputDay] = useState('date')
  const [styleInputMonth, setStyleInputMonth] = useState('date')
  const [styleInputYear, setStyleInputYear] = useState('date')

  const [emptyInputDay, setEmptyInputDay] = useState('')
  const [emptyInputMonth, setEmptyInputMonth] = useState('')
  const [emptyInputYear, setEmptyInputYear] = useState('')

  const currentDate = new Date()

  const update = () => {
    if (date.day != '' && date.month != '' && date.year != '') {
      setDateUpdated(date)

      setEmptyInputDay('')
      setEmptyInputMonth('')
      setEmptyInputYear('')

      setStyleInputDay('date')
      setStyleInputMonth('date')
      setStyleInputYear('date')
    }

    if (date.day == '') {
      setEmptyInputDay('This field is required')
      setStyleInputDay('dateEmpty')
    }

    if (date.month == '') {
      setEmptyInputMonth('This field is required')
      setStyleInputMonth('dateEmpty')
    }

    if (date.year == '') {
      setEmptyInputYear('This field is required')
      setStyleInputYear('dateEmpty')
    }

    if (date.day < 1 || date.day > 31) {
      setEmptyInputDay('Muste be a valid day')
      setStyleInputDay('dateEmpty')
    }

    if (date.month < 1 || date.month > 12) {
      setEmptyInputMonth('Muste be a valid month')
      setStyleInputMonth('dateEmpty')
    }

    if (date.year > currentDate.getFullYear()) {
      setEmptyInputYear('Muste be in the past')
      setStyleInputYear('dateEmpty')
    }
  }

  return (
    <div className="display">
      <div className="numbers">
        <div className={styleInputDay}>
          <label>DAY</label>
          <input
            type="number"
            className="input"
            placeholder="DD"
            onChange={e => {
              setDate({ ...date, day: e.target.value })
            }}
          />
          <p className="empty">{emptyInputDay}</p>
        </div>

        <div className={styleInputMonth}>
          <label>MONTH</label>
          <input
            type="number"
            className="input"
            placeholder="MM"
            onChange={e => {
              setDate({ ...date, month: e.target.value })
            }}
          />
          <p className="empty">{emptyInputMonth}</p>
        </div>

        <div className={styleInputYear}>
          <label>YEAR</label>
          <input
            type="number"
            className="input"
            placeholder="YY"
            onChange={e => {
              setDate({ ...date, year: e.target.value })
            }}
          />
          <p className="empty">{emptyInputYear}</p>
        </div>
      </div>

      <nav>
        <div></div>
        <button className="arrow" onClick={update}></button>
      </nav>

      <Amount data={dateUpdated} />
    </div>
  )
}
