import { useState } from 'react';
import './Password.css'


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const handleSubmit = (e) => {
    // Standartinio HTML formos veikimo sustabdymas
    e.preventDefault();

    const form = new FormData(e.target)
            for(const input of form.entries()) {}
}

const Password = () => {
    const [numbersCheckbox, setNumbersCheckbox] = useState({ name: '0123456789'});
    const handleNumbers = (e) => {
     setNumbersCheckbox({...numbersCheckbox, [e.target.name] : e.target.value })
    }
    const [symbolsCheckbox, setSymbolsCheckbox] = useState({name:"!@#$%^&*()-_=+[]{};:'\"\\|,<.>/?" });
    const handleSymbols = (e) => {
        setSymbolsCheckbox({...symbolsCheckbox, [e.target.name] : e.target.value})
    }

    const letters = (length) => {
        let result = '';
        let raides = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols =  "!@#$%^&*()-_=+[]{};:'\"\\|,<.>/?";

        if(handleNumbers) raides += numbers;
        if(handleSymbols)  raides += symbols;
        

        for (let i = 0; i < length; i++) {
            result += raides[rand(0, raides.length - 1)];

        }

        return result;
    }
    const randomLetters = letters();
    console.log(letters)


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <h3>Password generavimas</h3>
                    <input value={randomLetters} />
                    <div className="password">
                        <div>Password ilgis<input type="number" value={letters} /></div>
                        <div>
                            <input type="checkbox" onChange={handleNumbers}/>
                            <h5>Numbers </h5>
                        </div>
                        <div>
                            <input type="checkbox" onChange={handleSymbols} />
                            <h5>Symbols</h5>
                        </div>
                        <button className="btn btn-primary" onClick={Password}>Generuoti</button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Password

//CHAT GPT


// import React, { useState } from "react";

// const Password = () => {
//   const [password, setPassword] = useState("");
//   const [length, setLength] = useState(8);
//   const [includeUppercase, setIncludeUppercase] = useState(true);
//   const [includeLowercase, setIncludeLowercase] = useState(true);
//   const [includeNumbers, setIncludeNumbers] = useState(true);
//   const [includeSymbols, setIncludeSymbols] = useState(true);

//   const generatePassword = () => {
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()-_=+[]{};:'\"\\|,<.>/?";

//     let chars = "";
//     if (includeUppercase) chars += uppercaseChars;
//     if (includeLowercase) chars += lowercaseChars;
//     if (includeNumbers) chars += numberChars;
//     if (includeSymbols) chars += symbolChars;

//     let newPassword = "";
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * chars.length);
//       newPassword += chars.charAt(randomIndex);
//     }

//     setPassword(newPassword);
//   };

//   return (
//     <div>
//       <h2>Password Generator</h2>
//       <div>
//         <label>Password Length:</label>
//         <input
//           type="number"
//           value={length}
//           onChange={(e) => setLength(parseInt(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={includeUppercase}
//             onChange={(e) => setIncludeUppercase(e.target.checked)}
//           />
//           Include Uppercase Letters
//         </label>
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={includeLowercase}
//             onChange={(e) => setIncludeLowercase(e.target.checked)}
//           />
//           Include Lowercase Letters
//         </label>
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={includeNumbers}
//             onChange={(e) => setIncludeNumbers(e.target.checked)}
//           />
//           Include Numbers
//         </label>
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={includeSymbols}
//             onChange={(e) => setIncludeSymbols(e.target.checked)}
//           />
//           Include Symbols
//         </label>
//       </div>
//       <button onClick={generatePassword}>Generate Password</button>
//       <div>
//         <h3>Generated Password:</h3>
//         <p>{password}</p>
//       </div>
//     </div>
//   );
// };

// export default Password;



