import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import MapContainer from '../containers/MapContainer';

const { Option } = Select;

class CategoryDropDown extends Component {
    constructor(props){
        super(props);
        this.state ={
            userChoice: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.dropDown = this.dropDown.bind(this);
    }
    
    handleChange = ((event) => {
        console.log(event.target.value);
    });

    dropDown = (() => {
        return(
            <div>
                <Select defaultValue="Choose Category" style={{ width: "10rem" }} onSelect={this.handleChange}>
                    <Option value="fun">Entertainment</Option>
                    <Option value="history" >History</Option>
                    <Option value="nature">Scenic</Option>
                    <Option value="food">Food</Option>
                </Select>
            </div>
        );
    });

    render() {
        return (
            <div className="App">
                <div className="container h-100">
                    {this.dropDown}
                    {/* <MapContainer /> */}
                </div>
            </div>
        );
    }
}

export default CategoryDropDown;



// const CategoryDropDown = (({ onChange }) => {
//     const menu = (
//         <Menu>
//           <Menu.Item>
//             <a target="fun" rel="noopener noreferrer" onClick={onChange}>
//               Entertainment
//             </a>
//           </Menu.Item>
//           <Menu.Item >
//             <a target="history" rel="noopener noreferrer" onClick={onChange}>
//               History
//             </a>
//           </Menu.Item>
//           <Menu.Item>
//             <a target="nature" rel="noopener noreferrer" onClick={onChange}>
//               Scenic
//             </a>
//           </Menu.Item>
//           <Menu.Item>
//             <a target="food" rel="noopener noreferrer" onClick={onChange}>
//               Food
//             </a>
//           </Menu.Item>
//         </Menu>
//     );
//     return(
//         <div>
//             <Dropdown className="" overlay={menu} placement="bottomLeft" onClick={onChange}>
//                 <Button>Choose Category</Button>
//             </Dropdown>
//         </div>
//     );
// });






// const CategoryDropDown = (({ onChange }) => {
//     return (
//         <>
//             <form>
//                 <label>
//                     Type of Day you want to have:
//                     <select selected value="choose" onChange={onChange}>
//                         <option value="entertainment">Entertainment</option>
//                         <option value="history">History</option>
//                         <option value="scenic">Scenic</option>
//                         <option value="food">Food</option>
//                     </select>
//                 </label>
//             </form>

//             <form>
//                 <label>
//                     How much money do you want to spend? 
//                     <select selected valueM="choose" onChange={onChange}>
//                         <option valueM="broke">Broke</option>
//                         <option valueM="$">$</option>
//                         <option valueM="$$">$$</option>
//                         <option valueM="$$$">$$$</option>
//                         <option valueM="$$$$">$$$$</option>
//                     </select>
//                 </label>
//             </form>
//         </>
//     );
//   });
