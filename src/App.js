import { useState } from "react";
import "./App.css";
import {
  lowercaseLetters,
  uppercaseLetters,
  numbers,
  specialCharacters,
} from "./caracteres.js";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(true);
  const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState(false);

  const handleGeneratePassword = (e) => {
    e.preventDefault();

    let characterList = "";

    if (includeUppercaseLetters) {
      characterList += uppercaseLetters;
    }
    if (includeLowercaseLetters) {
      characterList += lowercaseLetters;
    }
    if (includeNumbers) {
      characterList += numbers;
    }
    if (includeSpecialCharacters) {
      characterList += specialCharacters;
    }

    setPassword(generatePassword(characterList));
  };

  const generatePassword = (characterList) => {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      password += characterList.charAt(characterIndex);
    }

    return password;
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Password Generator</h1>
        <div>
          <p>{password}</p>
        </div>
        <div className="content">
          <form>
            <div>
              <input
                type="number"
                name="length"
                max="20"
                min="6"
                id="length"
                value={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
              <label>Character Length</label>
            </div>
            <div >
              <input
                type="checkbox"
                name="uppercaseLetters"
                id="uppercaseLetters"
                checked={includeUppercaseLetters}
                onChange={(e) => setIncludeUppercaseLetters(e.target.checked)}
              />
              <label>Include Uppercase</label>
            </div>
            <div >
              <input
                type="checkbox"
                name="lowercaseLetters"
                id="lowercaseLetters"
                checked={includeLowercaseLetters}
                onChange={(e) => setIncludeLowercaseLetters(e.target.checked)}
              />
              <label>Include Lowercase</label>
            </div>
            <div >
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              <label>Include Numbers</label>
            </div>
            <div >
              <input
                type="checkbox"
                name="specialCharacters"
                id="specialCharacters"
                checked={includeSpecialCharacters}
                onChange={(e) => setIncludeSpecialCharacters(e.target.checked)}
              />
              <label>Include Symbols</label>
            </div>
            <button type="submit" onClick={handleGeneratePassword}>
              Generate
            </button>
          </form>git
        </div>
      </div>
    </div>
  );
}

export default App;
