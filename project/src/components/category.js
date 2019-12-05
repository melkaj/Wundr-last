import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Icon, Button, message } from 'antd';

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




const CategoryDropDown = (({ onChange }) => {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="entertainment" rel="noopener noreferrer">
              Entertainment
            </a>
          </Menu.Item>
          <Menu.Item >
            <a target="history" rel="noopener noreferrer">
              History
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="scenic" rel="noopener noreferrer">
              Scenic
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="food" rel="noopener noreferrer" onClick={onChange}>
              Food
            </a>
          </Menu.Item>
        </Menu>
      );
    return(
        <div>
            <Dropdown overlay={menu} placement="bottomLeft" onClick={onChange}>
                <Button>Something</Button>
            </Dropdown>
        </div>
    );
});


export default CategoryDropDown;
