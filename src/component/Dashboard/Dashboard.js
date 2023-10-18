import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./Dashboard.css";

const Dashboard = () => {
  const [ active, setActive ] = useState(1);
  return (
    <div className='sidebar d-flex justify-content-between flex-column text-white py-3 ps-3 pe-5 p-5 h-100'>
      <div>
        <span className='p-1'>
          <i className='bi bi-nut fs-3 me-2'></i>
          <span className='dashboard fs-4'>Dashboard</span>
        </span>
        <ul className='nav nav-pills flex-column mt-5'>
          <li className={active === 1 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(1)}>
            <span className='p-1'>
              <i className='bi bi-tv fs-3 me-3'></i>
              <span className='fs-5'>Dashboard</span>
            </span>
          </li>
          <li className={active === 2 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(2)}>
            <span className='p-1'>
              <i className='bi bi-cart4 fs-3 me-3'></i>
              <span className='fs-5'>Product</span>
            </span>
          </li>
          <li className={active === 3 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(3)}>
            <span className='p-1'>
              <i className='bi bi-person-circle fs-3 me-3'></i>
              <span className='fs-5'>Customers</span>
            </span>
          </li>
          <li className={active === 4 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(4)}>
            <span className='p-1'>
              <i className='bi bi-database-add fs-3 me-3'></i>
              <span className='fs-5'>Income</span>
            </span>
          </li>
          <li className={active === 5 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(5)}>
            <span className='p-1'>
              <i className='bi bi-patch-plus fs-3 me-3'></i>
              <span className='fs-5'>Promote</span>
            </span>
          </li>
          <li className={active === 6 ? 'active nav-item p-2 ' : "nav-item p-2"} onClick={e => setActive(6)}>
            <span className='p-1'>
              <i className='bi bi-chat-left-text fs-3 me-3'></i>
              <span className='fs-5'>Help</span>
            </span>
          </li>
        </ul>
      </div>
      <div className='nav-item p-2'>
        <span className='p-1'>
          <div className='fs-6'>
            <img   src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'/>
            <div className="profile_info">
            <span>Evano</span>
            <h3>Project Manager</h3>
          </div>
          </div>
        </span>
      </div>
    </div>

  )
}

export default Dashboard;
