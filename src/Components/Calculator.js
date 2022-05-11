import React from 'react';
import "./Calculator.css";

const Calculator = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 shadow-1g p-3 mb-5 mt-5 bg-white rounded;">
            <h1> React Calculator</h1>
                <table className="table">
                <tr>
                    <td colSpan="3">
                        <input className="w-100" type="text" />
                    </td>       
                    <td>

{/* Buttons for Calculator */}

                    <button>C</button>
                    </td>
                 </tr>

             <tr>
            <td>
                 <td><button>1</button></td>

                 <td><button>2</button></td>

                 <td><button>3</button></td>

                 <td><button>/</button></td>
               
            </td>
            </tr>
            
            <tr>
            <td>

                 <td><button>4</button></td>

                 <td><button>5</button></td>
                 
                 <td><button>6</button></td>

                 <td><button>-</button></td>
                 
             </td>
             </tr>

            
                <tr>
                <td>

                 <td><button>7</button></td>

                 <td><button>8</button></td>

                 <td><button>9</button></td>

                 <td><button>+</button></td>

                 </td>
                </tr>
            

            <td>
                 <tr>

                 <td><button>.</button></td>

                 <td><button>0</button></td>

                 <td><button>=</button></td>

                 <td><button>*</button></td>

                 </tr>
            </td>

            </table>
            </div>
        </div>
     </div>
    );
};

export default Calculator;