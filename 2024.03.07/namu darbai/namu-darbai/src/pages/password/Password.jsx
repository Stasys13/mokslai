

import { useState, useEffect } from 'react';
import './App.css'

const Password = () => {
  const [password, setPassword] = useState();
  const [passwordList, setPassword_list] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    let data = localStorage.getItem('data');
    if (!data) return;
    data = JSON.parse(data);
    setPassword_list(data)
  }, [loading])

  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generatePassword = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }

    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/';

    if (data.numbers)
      letters += numbers;

    if (data.symbols)
      letters += symbols;

    let result = '';

    for (let i = 0; i < data.length; i++) {
      result += letters[rand(0, letters.length - 1)];
    }
console
    setPassword(result);

    const localData = localStorage.getItem('data');

    if (localData) {
      let convertedData = JSON.parse(localData);
      if(convertedData.length === 10) convertedData.pop()
      convertedData.unshift(result);
      convertedData = JSON.stringify(convertedData);
      localStorage.setItem('data', convertedData);
    } else {
      // Sukūrimas
      localStorage.setItem('data', JSON.stringify([result]));
    }
    setLoading(!loading);
  }
  return (
    <>
      <h1>Password Generator</h1>
      {password &&
        <div className="generatedPassword">
          {password}
        </div>
      }
      <form
        className="d-flex gap-5 mt-3 align-items-center"
        onSubmit={generatePassword}
      >
        <div>
          <input
            type="number"
            defaultValue="20"
            className="form-control"
            name="length"
          />
        </div>
        <div className="d-flex gap-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="numbers"
            name="numbers"
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="d-flex gap-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="symbols"
            name="symbols"
          />
          <label htmlFor="symbols">Symbols</label>
        </div>
        <div>
          <button className="btn btn-primary">Generate</button>
        </div>
      </form>
      <table>
        <tbody>
          {passwordList.length === 0 && <tr><td>Kol kas neturime duomenų</td></tr>}
          {passwordList.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Password