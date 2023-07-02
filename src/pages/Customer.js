import React from 'react';
import SearchIcon from '../Assets/Dazzie Icons/SEARCH.svg';
import FilterIcon from '../Assets/Dazzie Icons/filter.svg';
import DotIcon from '../Assets/Dazzie Icons/threedots.svg';
const Customer = () => {
    return (
        <div style={{paddingLeft:30,paddingTop:50,flexDirection:'row'}}>
           <div>
              <text style={{color:"black", fontSize:25}}>Customer</text>
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
           {/* Data */}
           <div style={{paddingTop:30}}>
           <div style={{backgroundColor:'#F7F7FC'}}>
                 <div style={{display:'flex' , justifyContent:'space-evenly'}}>
                    <div>
                       <p>ID</p>
                    </div>
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <p>Join Date</p>
                    </div>
                    <div>
                        <p>Total Visit</p>
                    </div>
                    <div>
                        <p>Purchased Items</p>
                    </div>
                    <div>
                        <p>Total Spend</p>
                    </div>
                 </div>
            </div>
           </div>
        </div>
    )
}

export default Customer;