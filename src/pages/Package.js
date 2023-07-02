import React from 'react';

const Package = () => {
    return (
        <div style={{marginLeft:40 , marginTop:60, flexDirection:'row-reverse'}}>
            <div>
                <p style={{fontSize:25}}>Edit Product</p>
            </div>
            <div style={{flexDirection:'row'}}>
                <div>
                    <p style={{fontSize:18}}>ID</p>
                </div>
                <div style={{backgroundColor:'#F7F7FC' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>AAA1</text>
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
                    <p style={{fontSize:18}}>Product Name</p>
                </div>
                <div style={{backgroundColor:'#F7F7FC' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>Cappucino</text>
                </div>
                <div>
                    <p style={{fontSize:18}}>Category</p>
                </div>
                <div style={{backgroundColor:'#F7F7FC' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>Drink</text>
                </div> 
                <div>
                    <p style={{fontSize:18}}>Price</p>
                </div>
                <div style={{backgroundColor:'#F7F7FC' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:30, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>$3</text>
                </div>
                <div>
                    <p style={{fontSize:18}}>Description</p>
                </div>
                <div style={{backgroundColor:'#F7F7FC' ,paddingTop:10 , paddingBottom:10 , width:'78em' ,height:150, borderRadius:8 ,border: '1px solid #F7F7FC'}}>
                    <text style={{paddingLeft:20 , paddingTop:20}}>A Cappucino is an espresso-based coffee drink that organized in italy</text>
                </div>

            </div>
            <div style={{display:'flex'}}>
                 <div style={{backgroundColor:'#5541D7' , height:40 , width:100 , borderRadius:8 ,marginLeft:20 ,marginTop:30,paddingTop:20 }}>
                    <text style={{paddingLeft:30,color:'white',fontWeight:'bold'}}>SAVE</text>
                 </div>
                 <div style={{backgroundColor:'#FFFFF' , height:40 , width:100 , borderRadius:8 ,marginLeft:20 ,marginTop:30,paddingTop:20 }}>
                    <text style={{paddingLeft:30,color:'#92929D',fontWeight:'bold'}}>Cancel</text>
                 </div>
            </div>
        </div>
    )
}

export default Package;