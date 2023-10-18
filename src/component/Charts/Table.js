import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


const Tablechart = () => {
  return (
        <MDBTable align='middle'>
          <MDBTableHead>
            <tr>
              <th scope='col'><span className='heading'>Product Name</span></th>
              <th scope='col'><span className='heading'>Stock</span></th>
              <th scope='col'><span className='heading'>Price</span></th>
              <th scope='col'><span className='heading'>Totle Sales</span></th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1 fs-5'>Abstract 3D</p>
                    <p className='text-muted mb-0'><span className='heading'>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span></p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>32 in stock</p>
              </td>
              <td>
              <p className='fw-bold mb-1'>$ 45.99</p>
              </td>
              <td>
              <p className='fw-normal mb-1'>20</p>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1 fs-5'>Sarphens Illustration</p>
                    <p className='text-muted mb-0'><span className='heading'>Lorum ipsum dolor sit amet, consectetur adipiscing elit</span></p>
                  </div>
                </div>
              </td>
              <td>
                <p className='fw-normal mb-1'>32 in stock</p>
              </td>
              <td>
              <p className='fw-bold mb-1'>$ 45.99</p>
              </td>
              <td>
              <p className='fw-normal  mb-1'>20</p>
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      );
    };

export default Tablechart;
