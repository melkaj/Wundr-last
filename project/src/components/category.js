import React, { Component } from 'react';
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
