import React, { useState } from 'react';
import './Calculatrice.css';

const Calculatrice = () => {
  const [display, setDisplay] = useState("");

  // Fonction pour ajouter des chiffres ou opérateurs
  const handleClick = (value) => {
    // Empêcher d'ajouter plusieurs opérateurs à la suite
    const operators = ['/', '*', '-', '+', '.'];
    if (
      (operators.includes(value) && display === "") ||
      (operators.includes(value) && operators.includes(display.slice(-1)))
    ) {
      return;
    }
    setDisplay(display + value);
  };

  // Calculer le résultat
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setDisplay(eval(display).toString());
    } catch (error) {
        console.log(error);
      setDisplay("Erreur");
      setTimeout(() => setDisplay(""), 1500);
    }
  };

  // Tout effacer
  const clear = () => {
    setDisplay("");
  };

  // Effacer le dernier caractère
  const deleteLast = () => {
    if (display === "Erreur") {
        setDisplay(""); 
        return;
    }
    setDisplay(display.slice(0, -1));
  };

  return (
  <div className="calculator-grid">
    {/* Correction : display -> output, et ajout de current-operand pour le style */}
    <div className="output">
      <div className="current-operand">{display || "0"}</div>
    </div>

    {/* Correction : Suppression de <div className="operators"> */}
    
    {/* Ligne 1 */}
    <button onClick={clear} className="span-two">AC</button>
    <button onClick={deleteLast}>DEL</button>
    <button onClick={() => handleClick('/')}>÷</button>

    {/* Ligne 2 */}
    <button onClick={() => handleClick('7')}>7</button>
    <button onClick={() => handleClick('8')}>8</button>
    <button onClick={() => handleClick('9')}>9</button>
    <button onClick={() => handleClick('*')}>*</button>

    {/* Ligne 3 */}
    <button onClick={() => handleClick('4')}>4</button>
    <button onClick={() => handleClick('5')}>5</button>
    <button onClick={() => handleClick('6')}>6</button>
    <button onClick={() => handleClick('+')}>+</button>

    {/* Ligne 4 */}
    <button onClick={() => handleClick('1')}>1</button>
    <button onClick={() => handleClick('2')}>2</button>
    <button onClick={() => handleClick('3')}>3</button>
    <button onClick={() => handleClick('-')}>-</button>

    {/* Ligne 5 */}
    <button onClick={() => handleClick('.')}>.</button>
    <button onClick={() => handleClick('0')}>0</button>
    <button onClick={calculate} className="span-two">=</button>
  </div>
  );
};

export default Calculatrice;