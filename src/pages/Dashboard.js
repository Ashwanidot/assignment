import React from 'react';
import SearchIcon from '../Assets/Dazzie Icons/SEARCH.svg';
import FoodItem from '../components/FoodItem';

const DashBoard = () => {
    const sample_data = [
        {
            id:1,
            name:'All'
        },
        {
            id:2,
            name:'Food'
        },
        {
            id:3,
            name:'Drinks'
        },
        {
            id:4,
            name:'Snack'
        },
        {
            id:5,
            name:'Packages'
        }
    ]
    return (
        <div style={{marginTop:20 ,marginLeft:10 , marginRight:10}}>
            <div style={{display:'flex',backgroundColor:'#F7F7FC',width:'80em',paddingTop:8 , paddingBottom:8 ,paddingLeft:10, borderRadius:8}}>
               <div style={{paddingRight:10}}>
               <img src={SearchIcon} alt=" "/>
               </div>
               <div>
                 <text style={{fontSize:14,color:'gray'}}>Search here....</text>
               </div>
            </div>
            {/* Data Containers */}
           <div style={{flexDirection:'row'}}>
            <div style={{display:'flex' ,justifyContent:'space-around',paddingTop:20}}>
             {
                sample_data.map((item,index) => {
                    return (
                        <div>
                            <p style={{color:'gray'}}>{item.name}</p>
                        </div>
                    )
                })
             }
            </div>
            <div style={{display:'flex'}}>
                <text style={{fontSize:3}}>D</text>
                <div style={{backgroundColor:'#5541D7' ,width:240,borderWidth:1}}/>
                <div style={{backgroundColor:'#F7F7FC' ,width:1080,borderWidth:3}}/>
            </div>
        </div>
        <div style={{marginLeft:20 , flexDirection:'row',marginTop:40}}>
           <div>
              <p style={{fontSize:'1.7em'}}>Food</p>
           </div>
           <div style={{flexWrap:'wrap',display:'flex'}}>
               <FoodItem />
               <FoodItem />
               <FoodItem />
               <FoodItem />
               <FoodItem />
               <FoodItem />
           </div>
        </div>
        <div style={{marginLeft:20 , flexDirection:'row',marginTop:40}}>
           <div>
              <p style={{fontSize:'1.7em'}}>Drinks</p>
           </div>
           <div style={{flexWrap:'wrap',display:'flex'}}>
               <FoodItem />
               <FoodItem />
               <FoodItem />
               
           </div>
        </div>
        </div>
    )
}

export default DashBoard;