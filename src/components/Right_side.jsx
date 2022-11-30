import React, { useEffect } from 'react' 
import SearchIcon from '@mui/icons-material/Search';  
import NotificationsIcon from '@mui/icons-material/Notifications'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 


import axios from 'axios';

export default function Right_side() {


let dataMembers = [
  {
    sifat:"Faol foydalanuvchilar",   
    image:"../PeopleIcon.png",


    son:"1.5 mln", 
    img:"../improvement.png",
    benefit:"+15%",
    batafsil:"Batafsil"
  },
  {
    sifat:"Shaxsini tasdiqlagan", 
    image:"../GreenPeople.png",
    son:"625.1k", 
    img:"../improvement.png",
    benefit:"+15%", 
    batafsil:"Batafsil"
  },
  {
    sifat:"Shubhali foydalanuvchi", 
    image:"../Redpeople.png",
    son:"5.1k", 
    img:"../improvement.png",
    benefit:"+15%", 
    batafsil:"Batafsil"
  },
 
] 
let datamembers2 = [ 
  {
    sifat:"Faol bo’lmagan ", 
    image:"../Grouppeople.png",
    son:"25.1k",  
    img:"../improvement.png",
    benefit:"+15%", 
    batafsil:"Batafsil"
  },
  {
    sifat:"Soliq xodimlari", 
    image:"../policemen.png",
    son:"2.1k",  
    img:"../improvement.png",
    benefit:"+15%", 
    batafsil:"Batafsil"
  },
  {
    sifat:"Yuklab olingan", 
    image:"../instalation.png",
    son:"1.7 mln",  
    img:"../improvement.png",
    benefit:"+15%", 
    batafsil:"Batafsil"
  }
]





  return ( 
 <div className='right_side'>  
     <div className="Search_container">  
         <input className='Search' type="text" placeholder='          Search' />  
         <SearchIcon className='Search2' color='primary'/>  
         <NotificationsIcon color='primary' className='Bell'/> 
         <AccountCircleIcon color='primary' className='Profile'/>
     </div>     
     <b className='otganlar'>Ro/’yxatdan o’tanlar</b>
     <div className="Satitstik">    
     <img className='Vector1' src="../Vector1.png" alt="" /> 
     <img className='Vector2' src="../Vector2.png" alt="" />
      <div className="Number">   
       <b className='Number2'> 1     712    001</b> 
      </div> 
      <img className='para' src="../para.png" alt="" /> 
      <img className='Info' src="../informatsiya.png" alt="" />
      
     </div>

     <div className="container">
      <div className="row">
        {
          dataMembers.map((v,i)=>{
            return <div className='col-4'> 
            <div className="members">   
              <div className="member">   
              <div className='Nomi_icon'>  <b className='Nomi'>{v.sifat}</b> <img className='member_icon' src={v.image} alt="" /></div>
             
              <p className='Numberi'>{v.son}</p>   
              <div className="benefit">  
              <div><img className='impovement' src={v.img} alt="" />
              <b className='Percentage'>{v.benefit}</b></div>
              <div className='Batafsil_div'> <b className='Batafsil'>{v.batafsil}</b> </div> 
              </div> 
              
              
              </div>
            
            </div>
              
              
            </div>
          })
        } 
        {
          datamembers2.map((v,i)=>{
            return <div className='col-4'> 
            <div className="members">   
              <div className="member2">   
                 <div className='Nomi_icon'>  
                   <b className='Nomi'>{v.sifat}</b>  
                   <img className='member_icon' src={v.image} alt="" /> 
                  </div>
              
                    <p className='Numberi'>{v.son}</p> 
                    <div className="benefit">  
                    <div><img className='impovement' src={v.img} alt="" />
              <b className='Percentage'>{v.benefit}</b></div>
              <div className='Batafsil_div'> <b className='Batafsil'>{v.batafsil}</b> </div> 
              </div> 
              </div>
            
            </div>
              
              
            </div>
          })
        }
      </div>
     </div>
 </div>
    
  )
}
