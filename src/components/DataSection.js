import React from 'react';
import { AiOutlineArrowUp ,AiOutlineArrowDown } from "react-icons/ai";

const DataSection = (props) => {
    let {  name , price , percentage , iconColor} = props;
    return (
      
        <div style={{height:100 , width:280 , flexDirection:'row',boxShadow: '1px 1px 1px 1px rgb(240,240,240)',borderRadius:8 ,marginLeft:30,marginTop:20}}>
           <div style={{display:'flex', justifyContent:'space-around' ,paddingTop:20}}>
            <div>
               <text>{name}</text>
            </div>
            <div>
                { name === 'Customer'  ?
               <AiOutlineArrowDown style={{color:iconColor}}/>
               :
               <AiOutlineArrowUp style={{color:iconColor}} />
              }
            </div>
          </div>
          <div style={{display:'flex', justifyContent:"space-around"}}>
            <div>
                <p>{price}</p>
            </div>
            <div>
                <p style={{color:iconColor}}>{percentage}</p>
            </div>
          </div>
        </div>

    )
}

export default DataSection;