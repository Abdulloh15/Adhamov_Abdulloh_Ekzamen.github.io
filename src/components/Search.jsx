import React from 'react'
import SearchIcon from '@mui/icons-material/Search'; 
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'; 
import AddAlertIcon from '@mui/icons-material/AddAlert';
export default function   
() {
  return (
    <div> 
       <div className="Search_container">  
       <input className='Search' type="text" placeholder='Search' />  
       <SearchIcon className='Search2' color=''/>  
       <AddAlertIcon/>
      </div>
       <NotificationsNoneIcon className='Notification'/>
    </div>
  )
}
