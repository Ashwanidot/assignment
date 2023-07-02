import React from 'react';
import Dot from '../Assets/Dazzie Icons/threedots.svg';
const UserComponent = () => {
    return (
     <div style={{border:'2px solid #F7F7FC',width: 350, height: 80 ,paddingTop:20, display:'flex',borderRadius:8,marginLeft:20 ,marginBottom:20 }}>
        <div style={{backgroundColor:'#E2E2EA' ,width:60,height:60,borderRadius:30,marginLeft:15}}>
        </div>
        <div style={{flexDirection:'row',paddingLeft:20}}>
            <div style={{paddingTop:10}}>
                <text>Brooklyn Simmons</text>
            </div>
            <div style={{display:'flex',paddingTop:10}}>
                <div style={{paddingRight:5}}>
                    <text style={{fontSize:12}}>Admin</text>
                </div>
                <div>
                    <text style={{fontSize:12,color:'#5541D7'}}>Details</text>
                </div>
            </div>
        </div>
        <div style={{paddingTop:10 ,paddingLeft:60}}>
            <img src={Dot} alt=" "/>
        </div>
     </div>
    )
}

export default UserComponent;