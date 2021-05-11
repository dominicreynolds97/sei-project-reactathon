import { useEffect, useState } from 'react'

export function StartClock({ localtime }) {

  const times = localtime.split(':')
  const [hours, minutes] = times

  console.log()

  // const [time, setTime] = useState({
  //   seconds: 1,
  //   minutes: minutes,
  //   hours: hours,
  // })
  const [ second, setSecond ] = useState(new Date().getSeconds())
  const [ minute, setMinute ] = useState(Number(minutes))
  const [ hour, setHour] = useState(Number(hours))

  const secondIncrement = () => {
    if (second < 59) {
      setSecond(second + 1)
    } else {
      setSecond(0) 
      if (minute < 59) {
        setMinute(Number(minute + 1))
      } else {
        setMinute(0)
        if (hour < 23) {
          setHour(Number(hour + 1))
        } else {
          setHour(0)
        }
      }
    }
  }

  useEffect(() => {
    const clock = setTimeout(() => {
      secondIncrement()
    }, 1000)
  }, [second])

  return (
    <h4 className="title is-4">
      Local Time: {`${('0' + hour).slice(-2)}:${('0' + minute).slice(-2)}:${('0' + second).slice(-2)}`}
    </h4>
  )
}

// as soon as WeatherShow is opened
// function to start timer should be triggered

{/* <h4 className="title is-4">Local Time: {location.localtime.split(' ')[1]}</h4> */ }