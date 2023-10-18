import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './component/Dashboard/Dashboard';
 import Content from './component/Dashboard/Content';
import '@fortawesome/fontawesome-free/css/all.min.css';   
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className="d-flex">
      <div className='w-auto'>
      <Dashboard/>
      </div>
      <div className="col overflow-auto">
        <Content/>
    </div>
    </div>
  );
}

export default App;
