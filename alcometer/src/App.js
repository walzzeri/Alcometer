import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function handleSubmit(e) {
  e.preventDefault();
  let result = 0;
  let litres = bottles * 0.33;
  let grams = litres * 8 * 4.5;
  let burning = weight / 10;
  let leftover = grams - (burning * time)

  
  if (gender === 'male') {
    result = leftover / (weight * 0.7)
  }
  else {
    result = leftover / (weight * 0.6)
  }
  setAlcohol(result)
}


function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [alcohol, setAlcohol] = useState(0);



}