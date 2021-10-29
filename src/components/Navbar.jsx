import React,{useState,useEffect} from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined,TeamOutlined} from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'
const Navbar = () => {
    const[activeMenu,setActiveMenu] = useState(true);
    const[screenSize,setScreenSize] = useState(null);
    const[activeMenu2,setActiveMenu2] = useState(true);
    useEffect(()=>{
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize",handleResize);
        handleResize();

        return ()=> window.removeEventListener("resize",handleResize);
    },[]);

    useEffect(()=>{
        if(screenSize <= 768){
            setActiveMenu2(false);
        } else
        {
            setActiveMenu2(true);
        }
    },[screenSize])
    return (
        <div className="nav-container">
            <div className="logo-container">
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={()=>setActiveMenu2(!activeMenu2)}>
                <MenuOutlined/>
            </Button>
            </div>
            {activeMenu2 && (
                 <Menu theme="dark">
                 <Menu.Item icon={<HomeOutlined/>} onClick={()=>setActiveMenu(!activeMenu)} >
                     <Link to="/">Home</Link>
                 </Menu.Item>
                 <Menu.Item icon={<FundOutlined/>} onClick={()=>setActiveMenu(!activeMenu)}>
                     <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                 </Menu.Item>
                 <Menu.Item icon={<MoneyCollectOutlined/>} onClick={()=>setActiveMenu(!activeMenu)}>
                     <Link to="/exchanges">Exchanges</Link>
                 </Menu.Item>
                 <Menu.Item icon={<BulbOutlined/>} onClick={()=>setActiveMenu(!activeMenu)}>
                     <Link to="/news">News</Link>
                 </Menu.Item>
                 <Menu.Item icon={<TeamOutlined />} onClick={()=>setActiveMenu(!activeMenu)}>
                     <Link to="/about">Who We Are</Link>
                 </Menu.Item>
             </Menu>
            )}
            
        </div>
    )
}

export default Navbar
