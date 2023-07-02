import React from 'react';
import Pen from '../Assets/Dazzie Icons/pen.svg';
import Plus from '../Assets/Dazzie Icons/plus.svg';
import UserComponent from '../components/UserComponent';

const User = () => {
    return (
        <div style={{marginLeft:20,marginRight:130,flexDirection:'row'}}>
            <div style={{display:'flex', justifyContent:'space-between',width:'75em',paddingBottom:15}}>
             <div style={{paddingTop:20}}>
                <p style={{fontSize:20}}>Employee Shift</p>
            </div>
            <div style={{backgroundColor:'#5541D7' , height:20 , width:140, borderRadius:8 ,marginLeft:20 ,marginTop:30,paddingTop:8,paddingBottom:8 }}>
                    <text style={{paddingLeft:30,color:'white',fontWeight:'bold'}}>Create New</text>
                 </div>
            </div>
            <div style={{display:'flex' , justifyContent:'space-between',paddingBottom:20}}>
                <div>
                    <text>Shift 01 (06AM - 12AM)</text>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{paddingRight:30}}>
                        <img src={Pen} alt=" "/>
                    </div>
                    <div>
                        <img src={Plus} alt=" "/>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom:15, flexWrap:'wrap', display:'flex'}}>
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />

            </div>
            <div style={{display:'flex' , justifyContent:'space-between',paddingBottom:20}}>
                <div>
                    <text>Shift 02 (01PM - 11PM)</text>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{paddingRight:30}}>
                        <img src={Pen} alt=" "/>
                    </div>
                    <div>
                        <img src={Plus} alt=" "/>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom:15, flexWrap:'wrap', display:'flex'}}>
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
                <UserComponent />
            </div>
        </div>
    )
}

export default User;