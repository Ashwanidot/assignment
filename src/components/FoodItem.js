import React from 'react';

const FoodItem = () => {
    // const names = [
    //     {
    //         id:1,
    //         name: 'Sashimi'
    //     },
    //     {
    //         id:2,
    //         name: 'Unagi-Grilled Eel'
    //     },
    //     {
    //         id:3,
    //         name: 'Saba-Buckwheat Noodles'
    //     },
    //     {
    //         id:4,
    //         name: 'Onigiri - Rice Balls'
    //     },
    //     {
    //         id:5,
    //         name:'Yakitori - Grilled Chicken'
    //     },
    //     {
    //         id: 6,
    //         name: 'Miso Soup'
    //     }
    // ]
    return (
    
        <div style={{flexDirection:'row',border:'1px solid #E2E2EA' , borderRadius:8,paddingTop:10 ,paddingLeft:10 ,paddingBottom:10,width:360,marginRight:20,marginBottom:20}}>
           <div style={{width:350 , height:150 , backgroundColor:'#E2E2EA',borderRadius:8}} />
           <div style={{flexDirection:'row'}}>
          
              <div>
                 <p>Sashimi</p> 
              </div>           
        
              <div style={{color:'#42BDA1'}}>
                $22
              </div>
           </div>
           {/* Part2 */}
        </div>
    )
}

export default FoodItem;