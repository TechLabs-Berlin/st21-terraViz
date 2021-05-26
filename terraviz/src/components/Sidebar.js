import React, {useState} from 'react';
import { IoIosArrowDropleft } from 'react-icons/io';
import './Sidebar.css';


function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const closeSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className="Sidebar">
         <nav className = {sidebar ? 'nav active' : 'nav'}>
             <ul className = 'nav-items'>
                 <li className='nav-toggle' >
                  <IoIosArrowDropleft onClick={closeSidebar} />
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
