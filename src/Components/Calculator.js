import React from 'react';
import "./Calculator.css";

const Calculator = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
            <h1> React Calculator</h1>

            <table>
                <tr>
                    <td>
                        <input type="text" />
                    </td>       
                    <td>
                    <button>C</button>
                    </td>
                 </tr>

                 <tr>
                 <button>1</button>
                 <button>2</button>
                 <button>3</button>
                 <button>/</button>
                </tr>

                <tr>
                 <button>4</button>
                 <button>5</button>
                 <button>6</button>
                 <button>-</button>
                </tr>

                <tr>
                 <button>7</button>
                 <button>8</button>
                 <button>9</button>
                 <button>+</button>
                </tr>

                <tr>
                 <button>.</button>
                 <button>0</button>
                 <button>=</button>
                 <button>*</button>
                </tr>

            </table>
            </div>
        </div>
     </div>
    );
};

export default Calculator;