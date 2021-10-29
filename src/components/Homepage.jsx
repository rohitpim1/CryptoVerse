import React from 'react'
import millify from 'millify';
import {Typography,Row,Col, Statistic} from "antd";
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader'

const {Title} = Typography;
const Homepage = () =>{
    const {data,isFetching} = useGetCryptosQuery(10);
    const globalState = data?.data?.stats;

    if(isFetching) return <Loader/>;
    return(
        <>
        <div className="head" >
        <Title level={2} className="heading" style={{textAlign:"center"}}>Global Crypto Statistics</Title>
        </div>
        <Row style={{textAlign:"center",marginTop:"50px", border:"2px dotted black",padding:"15px",background:"#e6f7ff"}}>
            <Col span={12} className="globalCrypto"><Statistic title="Total Cryptocurrencies" value={globalState.total}/></Col>
            <Col span={12} className="globalCrypto1"><Statistic title="Total Exchanges" value={millify(globalState.totalExchanges)}/></Col>
            <Col span={12} className="globalCrypto2"><Statistic title="Total Market Cap" value={millify(globalState.totalMarketCap)}/></Col>
            <Col span={12} className="globalCrypto3"><Statistic title="Total 24h Volume" value={millify(globalState.total24hVolume)}/></Col>
            <Col span={12} className="globalCrypto4"><Statistic title="Total Markets" value={millify(globalState.totalMarkets)}/></Col>

        </Row>
        <div className="home-heading-container">
         <Title level={4} className="home-title">Top 10 Cryptocurrencies</Title>
         </div>
         <Cryptocurrencies simplified/>
         <div className="home-heading-container1">
         <Title level={5} className="show-more"><Link to='/cryptocurrencies' className="showmore">show more</Link></Title>
         </div>
         <div className="home-heading-container">
         <Title level={4} className="home-title">Latest Crypto News</Title>
         </div>
         <News simplified/>
         <div className="home-heading-container1">
         <Title level={5} className="show-more"><Link to='/news' className="showmore">show more</Link></Title>
         </div>
        </>
    )
}

export default Homepage;

