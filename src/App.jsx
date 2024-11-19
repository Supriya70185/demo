import Home from './pages/Home'
import React, { useState } from 'react';

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  // logic
  let calBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    }
    else {
      let bmi = (weight / (height * height) * 70)
      setBmi(bmi.toFixed(1))




      if (bmi < 40) {
        setMessage('you are under weight')
      }
      else if (bmi >= 40 && bmi < 50) {
        setMessage('you are a healthy weight')
      }
      else {
        setMessage('You are overweight')
      }
    }
  }
  let reload = ({ }) => {
    window.location.reload()
  }

  return (
    <>
      <div className="text-center m-4 bg-gray-300 border-2 border-gray-500 ">
        <h1 className='font-extrabold'>BMI Calculator</h1>
        <form onSubmit={calBmi}>
          <div className='space-x-2 '>
            <label className=''>Weight (lbs)</label>
            <input type='text' placeholder='Enter weight value' value={weight} onChange={(e) => setWeight(e.target.value)} className='border-2 border-black mt-3 sm:w-96 rounded-md '></input>
          </div>
          <div className='space-x-3'>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter height value' value={height} onChange={(Event) => setHeight(Event.target.value)} className='border-2 border-black mt-3 sm:w-96 rounded-lg'></input>
          </div>
          <div className='space-x-2'>
            <button className='btn mt-3 border-2 border-black w-24 rounded-lg bg-pink-200' type='submit'>Submit</button>
            <button className='btn btn-outline mt-3 border-2 border-black w-24 rounded-lg bg-pink-200' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>

{/* 
      <Home name="hyyyyy" />
      <Home /> */}
    </>
  )
}

export default App;
