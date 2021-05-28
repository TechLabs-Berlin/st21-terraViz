import React, {useState} from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import './Sidebar.css';


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IoIosArrowDropright className={sidebar ? 'nav-open' : 'hidden'} onClick={toggleSidebar} />
        <div className="Sidebar">
         <nav className = {sidebar ? 'nav active' : 'nav'}>
             <ul className = 'nav-items'>
                 <li className='nav-toggle' >
                  <IoIosArrowDropleft onClick={toggleSidebar} />
                 </li>
                 <li className='nav-list'>Legend</li>
                 <li className='nav-list'>Chart</li>
                 <li className='nav-list'>Summary</li>
             </ul>
         </nav>
         </div>
        </>
    )
}

export default Sidebar;
