import React from 'react';
import SearchIcon from '../Assets/Dazzie Icons/SEARCH.svg';
import FilterIcon from '../Assets/Dazzie Icons/filter.svg';
import DotIcon from '../Assets/Dazzie Icons/threedots.svg';

const Poll = () => {
    return (
        <div style={{marginLeft:20,marginRight:10,flexDirection:'row'}}>
            <div style={{display:'flex', justifyContent:'space-between',width:'75em',paddingBottom:15}}>
            <div style={{paddingTop:20}}>
                <p style={{fontSize:20}}>Coupon</p>
            </div>
            <div style={{backgroundColor:'#5541D7' , height:20 , width:140, borderRadius:8 ,marginLeft:20 ,marginTop:30,paddingTop:8,paddingBottom:8 }}>
                    <text style={{paddingLeft:30,color:'white',fontWeight:'bold'}}>Create New</text>
                 </div>
            </div>
            <div style={{paddingTop:20 , display:'flex',borderRadius:8 , marginTop:20 }}>
           <div style={{display:'flex',backgroundColor:'#F7F7FC',width:'70em',paddingTop:8 , paddingBottom:8 ,paddingLeft:10, borderRadius:8}}>
               <div style={{paddingRight:10}}>
               <img src={SearchIcon} alt=" "/>
               </div>
               <div>
                 <text style={{fontSize:14,color:'gray'}}>Search here....</text>
               </div>
            </div>
            <div style={{paddingLeft:20 , paddingTop:10}}>
               <img src={FilterIcon} alt=" "/>
            </div>
            <div style={{paddingLeft:20 , paddingTop:10}}>
                <img src={DotIcon} alt=" "/>
            </div>
           </div>
           <div style={{paddingTop:30}}>
           <div style={{backgroundColor:'#F7F7FC'}}>
                 <div style={{display:'flex' , justifyContent:'space-between'}}>
                    <div>
                       <p>ID</p>
                    </div>
                    <div>
                        <p>Code</p>
                    </div>
                    <div>
                        <p>Discount</p>
                    </div>
                    <div>
                        <p>Start Date</p>
                    </div>
                    <div>
                        <p>End Date</p>
                    </div>
                    <div>
                        <p>Activate</p>
                    </div>
                    <div>
                        
                    </div>
                 </div>
            </div>
           </div>
        </div>
    )
}

export default Poll;