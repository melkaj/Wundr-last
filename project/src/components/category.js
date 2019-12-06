import React from 'react';
import 'antd/dist/antd.css';
// import { Menu, Dropdown, Icon, Button, message, Select } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

const CategoryDropDown = (({ onChange }) => {
    return (
        <div style={{paddingTop:"10px"}}>
            <Select defaultValue="Choose Category" style={{ width: 200 }} onChange={onChange}>
                <Option value="fun">Entertainment</Option>
                <Option value="history">History</Option>
                <Option value="nature">Nature</Option>
                <Option value="food">food</Option>
            </Select>   
        </div>
    );
});

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



// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// ReactDOM.render(
//   <div>
//     <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
//       <Option value="jack">Jack</Option>
//       <Option value="lucy">Lucy</Option>
//       <Option value="disabled" disabled>
//         Disabled
//       </Option>
//       <Option value="Yiminghe">yiminghe</Option>
//     </Select>
//     <Select defaultValue="lucy" style={{ width: 120 }} disabled>
//       <Option value="lucy">Lucy</Option>
//     </Select>
//     <Select defaultValue="lucy" style={{ width: 120 }} loading>
//       <Option value="lucy">Lucy</Option>
//     </Select>
//   </div>,
//   mountNode,
// );




// const CategoryDropDown = (({ onChange }) => {
//     const menu = (
//         <Menu>
//           <Menu.Item>
//             <a target="entertainment" rel="noopener noreferrer" onClick={onChange}>
//               Entertainment
//             </a>
//           </Menu.Item>
//           <Menu.Item >
//             <a target="history" rel="noopener noreferrer" onClick={onChange}>
//               History
//             </a>
//           </Menu.Item>
//           <Menu.Item>
//             <a target="scenic" rel="noopener noreferrer" onClick={onChange}>
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
//         <div style={{paddingTop:"10px"}}>
//             <Dropdown overlay={menu} placement="bottomLeft" onClick={onChange}>
//                 <Button block>Choose Category</Button>
//             </Dropdown>
//         </div>
//     );
// });


// export default CategoryDropDown;



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
