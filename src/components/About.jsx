import React from 'react'
import {Row,Col,Typography} from 'antd'
const About = () =>{
    return(
        <>
        <Row className="about">
            <Col xs={10} sm={12} lg={10} md={10}>
                <Typography.Title level={2} style={{textAlign:"center",paddingTop:"20px"}}>About Us</Typography.Title>
                <Typography.Paragraph  className="abtParagraph" style={{textAlign:"center",fontSize:"1.3rem"}}>
                    <span style={{color:"red",fontSize:"30px"}}>"</span>
                     Hello, I am <span className="abt">Rohit Pimpalkar(freelancer)</span>, Basic idea Behind developing these application is <br></br>
                     to provide information in more precious way to the people who are interested in Crypto Currency.<br></br>
                     <span className="abt">CryptoVerse</span> is like a one stop for all Crypto lovers, where you can get all the information<br></br>
                     regarding Crypto Currency. Here on these application you will get know about all exchanges with <br></br>
                     there Totol Market Cap, 24H Volume, Total Cryptocurrencies, Total Market, Total Exchanges, and<br></br>
                      news along with live udates and in depth details of all the crypto Currencies along with <br></br>
                      statistics and graph. 
                    <span style={{color:"red",fontSize:"30px"}}>"</span>

                </Typography.Paragraph>
                <Typography.Paragraph style={{textAlign:"center" ,paddingBottom:"30px"}}>
                    Developed By : Rohit Pimpalkar (FreeLancer) Contact : rohitpimpalkar052@gmail.com
                </Typography.Paragraph>
                
            </Col>
        </Row>
        </>
    );
}
export default About;