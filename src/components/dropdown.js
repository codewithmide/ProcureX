import React, { useState } from 'react';
import './styles/Dropdownmenu.scss';
import Menu from '../assets/menu.svg';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    console.log(`You selected ${option}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        <img src={Menu} alt='Menu'/>
        Shop categories
        <FaAngleDown />
      </button>
      {isOpen && (
        <ul className="dropdown-options">
            <li onClick={() => handleOptionClick('Option 1')}>
                <Link className='dropdown-item'>
                    Home
                </Link>
            </li>
            <li onClick={() => handleOptionClick('Option 1')}>
                <Link className='dropdown-item'>
                    Industrial use
                </Link>
            </li>
            <li onClick={() => handleOptionClick('Option 1')}>
                <Link className='dropdown-item'>
                    Office use
                </Link>
            </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
