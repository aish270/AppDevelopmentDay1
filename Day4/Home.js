import React, { Component } from 'react'
import './Home.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../redux/userSlice'
import { Link } from 'react-router-dom'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Home=()=> {
  
  
    const user=useSelector(selectUser);
    return (
        <>
        <div >
        <div className="hometotal2">
        <div className='det'>
       
        <button className='btn btn-secondary' style={{background:'black',width:200}}>Progress</button>
        <br></br>
        <br></br>
        <h2>Status</h2>
        <br></br>
        <h2>80%</h2>
        </div>
       </div>
         
          
          </div>
       
          
      <div className="home">
        
       
        <div className='col1'>
        <div className="hometotal"><h4 style={{margin:150}}>Employees</h4></div>
        <div className="projectotal"><h4 style={{margin:150}}>Projects</h4></div>
        </div>
        <div className='col2'>
        <div className="emponline"><h4 style={{margin:150}}>Finished Projects</h4></div>
        <div className='projectct'><h4 style={{margin:165}}> Courses</h4></div>
        </div>


      </div>
      <div className='profile' >
       
       
       <div className="hometotal1">
        <div className='det'>
        <h2>Name {user.name}<br></br><br></br>Id {user.id}</h2>
        <br></br>
        <button className='btn btn-secondary' style={{background:'black',width:200}}>logout</button>
        </div>
       </div>
      
       

      </div>
      <div className='footer'>
      <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter> 
       

      </div>
      
      
      
      </>
     
    )
 
}

export default Home