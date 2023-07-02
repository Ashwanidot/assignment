import React from 'react';
import DataSection from '../components/DataSection';
import { AiOutlineArrowUp ,AiOutlineArrowDown,AiFillCaretDown } from "react-icons/ai";

const Coupen = () => {
    const data = [
        {
            id:1 ,
            name:'Customer',
            price:'1000',
            percentage: '-15%',
            Icon: <AiOutlineArrowDown />,
            iconColor: '#FF0000'
        },
        {
            id: 2 ,
            name: 'Orders',
            price: '1050',
            percentage: '+20%',
            Icon: <AiOutlineArrowUp />,
            iconColor: '#42BDA1'
        },
        {
            id:3 ,
            name: 'Revenue',
            price: '$50.000',
            percentage: '+10%',
            Icon: <AiOutlineArrowUp />,
            iconColor: '#42BDA1'
        },
        {
            id: 4,
            name: 'NettProfit',
            price: '$12.000',
            percentage:'+12%',
            Icon: <AiOutlineArrowDown />,
            iconColor: '#42BDA1'
        }
    ]
    return (
     <div>
        <div style={{display:'flex',justifyContent:'space-around'}}>
            {data.map((item) => {
                return (
                 <DataSection id={item.id} name={item.name} price={item.price} percentage={item.percentage} icon={item.Icon} iconColor={item.iconColor}/>
                )
            })}
        </div>
        <div style={{flexDirection:'row',display:'flex'}}>
        <div style={{flexDirection:'row',boxShadow: '1px 1px 5px 5px rgb(240,240,240)',marginTop:30 , marginLeft:30 ,borderRadius:10,width:750}}>
            <div style={{marginLeft:30}}>
                <p>Latest Order</p>
            </div>
            <div style={{backgroundColor:'#F7F7FC'}}>
                 <div style={{display:'flex'}}>
                    <div style={{paddingLeft:30}}>
                       <p>No</p>
                    </div>
                    <div style={{paddingLeft:30}}>
                        <p>Item</p>
                    </div>
                    <div style={{paddingLeft:200}}>
                        <p>Quality</p>
                    </div>
                    <div style={{paddingLeft:50}}>
                        <p>Revenue</p>
                    </div>
                    <div style={{paddingLeft:50 ,paddingRight:50}}>
                        <p>Net Profit</p>
                    </div>
                 </div>
            </div>
        </div>
     
        <div style={{marginLeft:30,marginTop:30,boxShadow: '1px 1px 5px 5px rgb(240,240,240)' , display:'flex',justifyContent:'space-around',borderRadius:10 ,width:500}}> 
            <div style={{paddingLeft:30}}>
                <p>Items Sold</p>
            </div>
            <div style={{border:'3px solid #5541D7' , height:40 , display:'flex',justifyContent:"space-evenly" , borderRadius:10}}>
            <div style={{paddingLeft:20 }}>
                <p style={{color:'#5541D7'}}>Best Sellers</p>
            </div>
            <div style={{paddingTop:20 ,paddingRight:20}}>
                <AiFillCaretDown style={{color:'#5541D7'}}/>
            </div>
            </div>
        </div>
        </div>
     </div>
    )
}

export default Coupen;