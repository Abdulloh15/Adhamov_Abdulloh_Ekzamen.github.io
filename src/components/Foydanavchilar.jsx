import React from 'react' 
import "./App.css" 
import Left_side from './Left_side' 
import SearchIcon from '@mui/icons-material/Search';  
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 



export default function Foydanavchilar() {
  return (
    <div> 
        <Left_side/>  
        <div className="Search_container">  
         <input className='Search' type="text" placeholder='          Search' />  
         <SearchIcon className='Search2' color='primary'/>  
         <NotificationsIcon color='primary' className='Bell'/> 
         <AccountCircleIcon color='primary' className='Profile'/>
     </div>     
    </div>
  )
}
