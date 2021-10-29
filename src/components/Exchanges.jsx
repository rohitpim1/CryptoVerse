import React from 'react'
import millify from 'millify'
import {Collapse,Row,Col,Typography,Avatar} from 'antd'
import HTMLReactParser from 'html-react-parser'
import { useGetExchangesQuery } from '../services/cryptoApi'
import Loader from './Loader'

const {Text} = Typography;
const {Panel} = Collapse;

const Exchanges = () =>{
    const { data, isFetching} = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;
    if (isFetching) return <Loader />;
  return (
      <>
      <div className="head" >
        <Typography.Title level={2} className="heading" style={{textAlign:"center"}}>Exchanges</Typography.Title>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
         <Typography.Title level={3} style={{textAlign:"center"}}>Here you will get know about all the listed exchanges along with there Trade Volume and Markets.</Typography.Title>
        </div>
      <Row>
          <Col span={6} style={{textAlign:"center"}}>Exchanges</Col>
          <Col span={6} style={{textAlign:"center"}}>24h Trade Volume</Col>
          <Col span={6} style={{textAlign:"center"}}>Markets</Col>
          <Col span={6} style={{textAlign:"center"}}>Change</Col>
      </Row>
      <Row>
      {
          exchangesList.map((exchange)=>(
              <Col span={24}>
                   <Collapse>
                   <Panel
                   key={exchange.id}
                   showArrow={false}
                   header={(
                       <Row key={exchange.id}>
                           <Col span={6}>
                               <Text><strong>{exchange.rank}</strong></Text>
                               <Avatar className="exchange-image" src={exchange.iconUrl}/>
                               <Text><strong>{exchange.name}</strong></Text>
                           </Col>
                           <Col span={6} style={{textAlign:"center"}}>${millify(exchange.volume)}</Col>
                           <Col span={6} style={{textAlign:"center"}}>${millify(exchange.numberOfMarkets)}</Col>
                           <Col span={6} style={{textAlign:"center"}}>${millify(exchange.marketShare)}</Col>

                       </Row>
                   )}
                   >
                       {HTMLReactParser(exchange.description || '')}
                   </Panel>
              </Collapse>
              </Col>
             

          ))
      }
      </Row>
      </>
    )
}
export default Exchanges;