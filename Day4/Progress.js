import React from 'react'
import './progress.css'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../redux/userSlice'


function Progress() {
    const user=useSelector(selectUser);
  return (
    <>
    <div className='prog'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div class="progress" style={{width:250,height:50,margin:10}}>
    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:200}}>
      80%
    </div>
    
  </div>
  <br></br>
  
  <h2>OverAll Status</h2>
    </div>
    <div className='prog2'>
    <div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-warning" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:320}} >
    Project Progress
  </div>
</div>
<br></br>
<br></br>
<div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-success" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:480}} >
    Course Progress
  </div>
</div>
<br></br>
<br></br>
<div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-info" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:320}} >
    Team Progress
  </div>
</div>
<br></br>
<br></br>
<div class="progress" style={{width:800 ,height:50}}>
  <div class="progress-bar progress-bar-success progress-bar-striped bg-danger" role="progressbar"
  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:320}} >
    Overall progress
  </div>
</div>
<br></br>
<br></br>
<h2>{user.name}</h2>
<h2>Individual Status</h2>

    </div>
    
    </>
  )
}

export default Progress