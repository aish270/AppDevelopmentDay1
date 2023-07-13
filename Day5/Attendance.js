import React from 'react'
import './attendance.css'

function Attendance() {
  return (
    <>
    <div className='leave'>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <h2 style={{margin:40}}>LeaveBalance</h2>
     <h3 className='btn btn-secondary' style={{width:200,background:'black'}}>11 days</h3>
     <h2 style={{margin:40}}>Attendance</h2>
     <h3 className='btn btn-secondary' style={{width:200,background:'black'}}>180 days</h3>
     <br></br>
     
     


    </div>
    <div className='leavereq'>
    <div className='signup1'>
        <form className='login_form'>
            <h1>Apply Leave</h1>
            <div className='loginbox' style={{width:500}}>
            <div className='form-floating mb-3'>
            <input type='name' className='form-control'
            placeholder='name'
             id='nm'
            />
            <label for='nm' style={{fontFamily:'serif',fontSize:20}}>Leave Type</label>
            </div>
            </div>
           
            <div className='loginbox' style={{width:500}}>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='id'
             id='id'
           />
            <label for='id' style={{fontFamily:'serif',fontSize:20}}>From</label>
            
            </div>
            </div>

            <div className='loginbox' style={{width:500}}>
            <div className='form-floating mb-3'>
            <input type='id' className='form-control'
            placeholder='age'
           id='age'
            />
            <label for='id' style={{fontFamily:'serif',fontSize:20}}>To</label>
            
            </div>
            </div>
            

            <div className='loginbox'style={{width:500}} >
            <div className='form-floating mb-3'>
            <input type='password' className='form-control'
            placeholder='password' id='pwd' style={{height:90}}
            
            />
            <label for='pwd' style={{fontFamily:'serif',fontSize:20}}>Reason</label>
            </div>
            </div>
            <button  type='submit' className='btn btn-secondary' style={{background:'black',color:'white',width:500,height:70,margin:40,fontFamily:'serif',fontSize:20}}>APPLY</button>

        </form>

    </div>
    </div>
    </>
  )
}

export default Attendance