import React, { Component } from 'react';

// CSS
// import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
// import { Menu, Dropdown, Icon, Button, message } from 'antd';



const CategoryDropDown = (({ onChange }) => {
    return (
        <>
            <form>
                <label>
                    Type of Day you want to have:
                    <select selected value="choose" onChange={onChange}>
                        <option value="Entertainment">Entertainment</option>
                        <option value="History">History</option>
                        <option value="Scenic">Scenic</option>
                        <option value="Food">Food</option>
                    </select>
                </label>
            </form>

            <form>
                <label>
                    How much money do you want to spend? 
                    <select selected value="choose" onChange={onChange}>
                        <option value="Broke">Broke</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                </label>
            </form>
        </>
    );
  });
  
  export default CategoryDropDown;



// class CategoryDropDown extends Component {      
//     constructor(props){
//         super(props);
//         this.state = {
//             choiceCategory: "Choose Something",
//             choicePrice: "",
//             userChoices: [{category: '', price: ''}],

//             option: ["Restaurant", "Amusement Park", "Cafe"],
//             // option1: "Restaurant",
//             // option2: "Amusement Park",
//             // option3: "Cafe" 
//         };
//         // this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange = (event) => {
//         this.setState({choice: event.target.value});
//         console.log(this.state.choice);
//     }

//     handleClick = (event) => {
//         console.log(this.state.choice);
//     }
    
//     render() {
//         return(
//             <>
//                 <form>
//                     <label>
//                         Type of Day you want to have:
//                         <select selected value={this.state.choice} onChange={this.handleChange}>
//                             <option value="Entertainment">Entertainment</option>
//                             <option value="History">History</option>
//                             <option value="Scenic">Scenic</option>
//                             <option value="Food">Food</option>
//                         </select>
//                     </label>
//                 </form>

//                 <form>
//                     <label>
//                         How much money do you want to spend? 
//                         <select selected value={this.state.choice} onChange={this.handleChange}>
//                             <option value="Broke">Broke</option>
//                             <option value="$">$</option>
//                             <option value="$$">$$</option>
//                             <option value="$$$">$$$</option>
//                             <option value="$$$$">$$$$</option>
//                         </select>
//                     </label>
//                 </form>

//                 <button onClick={this.handleClick}>
//                     press
//                 </button>
//             </>
//         )
//     };

// }

// export default CategoryDropDown;
