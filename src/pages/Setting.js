import React from 'react';

const Setting = () => {

    return (
       <div style={{display:'flex'}}>
            <div style={{width:160 ,flexDirection:'column',paddingLeft:40,paddingRight:20,boxShadow: '0px 1px 30px 0px rgb(240,240,240)',height:'100em'}}>
                <div style={{paddingTop:40}}>
                    <text style={{fontSize:20}}>Settings</text>
                </div>
                
                <div style={{paddingTop:20,paddingBottom:20}}>
                   <text style={{color:'#92929D'}}>Account</text>
                </div>
                <div style={{paddingTop:20,paddingBottom:20}}>
                   <text style={{color:'#11142D'}}>Business Information</text>
                </div>
                <div style={{paddingTop:20,paddingBottom:20}}>
                   <text style={{color:'#92929D'}}>Prefrences</text>
                </div>
                <div style={{paddingTop:20,paddingBottom:20}}>
                   <text style={{color:'#92929D'}}>Version</text>
                </div>
                <div style={{paddingTop:20,paddingBottom:20}}>
                   <text style={{color:'#92929D'}}>Integration</text>
                </div>
                <div style={{paddingTop:20,paddingBottom:20}}>
                   <text style={{color:'#92929D'}}>Database</text>
                </div>
                <div style={{paddingTop:20,paddingBottom:20}}>
                   <text style={{color:'#92929D'}}>Privacy</text>
                </div>
            </div>
            <div style={{marginLeft:30 , marginTop:40}}>
                <div>
                    <text style={{fontSize:20}}>Business Information</text>
                </div>
                <div style={{display:'flex',paddingTop:20}}>
                    <div style={{backgroundColor:'#E2E2EA' , height:120, width:110 , borderRadius:8}}/> 
                    <div style={{flexDirection:'row'}}>
                        <div style={{paddingLeft:20 , paddingTop:20}}>
                       <text>Select your product picture</text>
                       </div>
                       <div style={{backgroundColor:'#5541D7' , height:40 , width:130 , borderRadius:8 ,marginLeft:20 ,marginTop:30, paddingTop:10}}>
                             <text style={{paddingLeft:30,color:'white',fontWeight:'bold'}}>Browse</text>
                       </div>
                    </div>
                </div>
                <div>
                    <p style={{fontSize:18}}>Business Name</p>
                </div>
                <div style={{backgroundColor:'white' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>Cappucincai cyin</text>
                </div>
                <div>
                    <p style={{fontSize:18}}>Phone Number</p>
                </div>
                <div style={{backgroundColor:'white' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>(208)555-0112</text>
                </div>
                <div>
                    <p style={{fontSize:18}}>Email</p>
                </div>
                <div style={{backgroundColor:'white' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>capcyin@hello.com</text>
                </div>
                <div>
                    <p style={{fontSize:18}}>Country</p>
                </div>
                <div style={{backgroundColor:'white' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>Indonesia</text>
                </div>
                <div>
                    <p style={{fontSize:18}}>Address</p>
                </div>
                <div style={{backgroundColor:'white' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>Wangsu in Village No.221</text>
                </div>
            </div>
       </div>
    )
}

export default Setting;