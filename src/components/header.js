import React from 'react';
import NotificationIcon from '../Assets/Dazzie Icons/Notification Bell.svg';
const header = () => {
    return (
        <div style={{display:'flex' , justifyContent:'space-between', boxShadow: '0px 1px 2px 0px rgb(240,240,240)', height:80}}>
          <div style={{display:'flex' ,paddingLeft:20,paddingTop:20}}>
            <div style={{backgroundColor:'lightgrey', height:42 , width: 42 , borderRadius:10 ,marginRight:10}}>
                
            </div>
            <div style={{paddingTop:6}}>
                <text style={{fontSize:26}}>Dazzie</text>
            </div>
            </div>
            {/* Side Icon */}
            <div style={{display:'flex',paddingRight:50,paddingTop:20}}>
                <div style={{paddingRight:20 ,paddingTop:10}}>
                    {/* <Icon /> */}
                    <img src={NotificationIcon} alt=""/>
                </div>
                <div style={{backgroundColor:'lightgrey', height:44 , width:44 , borderRadius: 22 , marginRight:15}}>

                </div>
                <div style={{flexDirection:'row'}}>
                    <div style={{paddingTop:3}}>
                      <text>Sumanto</text>
                    </div>
                    <div>
                       <text style={{fontSize:12, color:'grey'}}>Cashier</text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header;