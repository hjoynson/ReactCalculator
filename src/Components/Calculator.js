import React, { useState } from 'react';
import "./Calculator.css";

const Calculator = () => {

const [inputValue, setInputValue] = useState ("");

const display = (value) => {
    setInputValue(inputValue + value);
};

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 shadow-1g p-3 mb-5 mt-5 bg-white rounded;">
            <h1> React Calculator</h1>
                <table className="table">
                <tr>
                    <td colSpan="3">
                        <input className="w-100" type="text" value={inputValue} />
                    </td>       
                    <td>

{/* Buttons for Calculator */}

                    <button>C</button>
                    </td>
                 </tr>
<tr className="space">
    <td className="p-2"></td>
</tr>
             <tr>
                <td>
                 <td><button onClick={() => {
                     display("1");
                 }}
                 >
                     1
                     </button></td>

                 <td><button onClick={() => {
                     display("2");
                 }}
                 >
                     2</button></td>

                 <td><button onClick={() => {
                     display("3");
                 }}
                 >
                     3</button></td>

                     <td><button onClick={() => {
                     display("/");
                 }}
                 >
                     /</button></td>
               
            </td>
            </tr>
            
            <tr>
                <td>
                 <td><button onClick={() => {
                     display("4");
                 }}
                 >
                     4
                     </button></td>

                 <td><button onClick={() => {
                     display("5");
                 }}
                 >
                     5</button></td>

                 <td><button onClick={() => {
                     display("6");
                 }}
                 >
                     6</button></td>

                     <td><button onClick={() => {
                     display("-");
                 }}
                 >
                     -</button></td>
               
            </td>
            </tr>

            
            <tr>
                <td>
                 <td><button onClick={() => {
                     display("7");
                 }}
                 >
                     7
                     </button></td>

                 <td><button onClick={() => {
                     display("8");
                 }}
                 >
                     8</button></td>

                 <td><button onClick={() => {
                     display("9");
                 }}
                 >
                     9</button></td>

                     <td><button onClick={() => {
                     display("+");
                 }}
                 >
                     +</button></td>
               
            </td>
            </tr>
            

            <tr>
                <td>
                 <td><button onClick={() => {
                     display(".");
                 }}
                 >
                     .
                     </button></td>

                 <td><button onClick={() => {
                     display("0");
                 }}
                 >
                     0</button></td>

                 <td><button onClick={() => {
                     display("=");
                 }}
                 >
                     =</button></td>

                     <td><button onClick={() => {
                     display("*");
                 }}
                 >
                     *</button></td>
               
            </td>
            </tr>

            </table>
            
            </div>
        </div>
     </div>


            
    );
};

export default Calculator;