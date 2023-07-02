import React from 'react';
import PackageIcon from '../Assets/Dazzie Icons/Package.svg';
import UserIcon from '../Assets/Dazzie Icons/user.svg';
import CouponDiscount from '../Assets/Dazzie Icons/Coupon Discount.svg';
import CustomerIcon from '../Assets/Dazzie Icons/customer.svg';
import PollIcon from '../Assets/Dazzie Icons/plus.svg';
import OrderIcon from '../Assets/Dazzie Icons/orders.svg';
import SettingIcon from '../Assets/Dazzie Icons/seettings.svg';
import { NavLink } from 'react-router-dom';
const SideBar = ({children}) => {
    const menuItem = [
        {
            path:"/dashboard",
            name:"DashBoard",
            icon:PollIcon,

        },
        {
            path:"/Coupen",
            name:"Coupen",
            icon:OrderIcon,

        },
        {
            path:"/Customer",
            name:"Customer",
            icon:CustomerIcon,

        },
        {
            path:"/Package",
            name:"Package",
            icon:PackageIcon,

        },
        {
            path:"/Poll",
            name:"Poll",
            icon:CouponDiscount,

        },
        {
            path:"/User",
            name:"User",
            icon:UserIcon,

        },
        {
            path:"/setting",
            name:"Setting",
            icon:SettingIcon
        }
    ]
    return (
        <div style={{display:'flex'}}>
        <div style={{width:60 ,flexDirection:'column',paddingLeft:40,paddingRight:20,boxShadow: '0px 1px 30px 0px rgb(240,240,240)',height:'100em'}}>
            {
                menuItem.map((item , index) => (
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                         <div style={{paddingTop:35, paddingBottom:25}}>
                          <img src={item.icon} style={{backgroundColor:'white'}} alt=''/>
                         </div>
                    </NavLink>
                ))
            } 
        </div>
        <div>
          <main>{children}</main>
        </div>
        </div>
        
    )
}

export default SideBar;