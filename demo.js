import React, { useState } from 'react';
import './a.css';
import { Radio, Tabs } from 'antd';
import { Layout, Input, Button, Row, Col,Switch,Card  } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
import { SearchOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag } from 'antd';

import { Col, Row } from 'antd';

const d = ()=>{
  return(
    <>
    <div style={{height:'400px',overflowY:'scroll'}}>

      <h1>Recommended Items</h1>
    <div style={{display:'flex',justifyConteent:'space-around',flexWrap:'wrap',gap:'12px'}}>


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px' ,position:'relative'}}>
    <h3>Name of Food</h3>

    <p style={{ marginTop: '5px', fontSize: '14px', color: '#333' ,textAlign:'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
      <button style={{ marginLeft:'12px',padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>
      
    </div>
    
      <Tag color="geekblue">geekblue</Tag>
      
    
    
   
  </div>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px' ,position:'relative'}}>
    <h3>Name of Food</h3>

    <p style={{ marginTop: '5px', fontSize: '14px', color: '#333' ,textAlign:'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
      <button style={{ marginLeft:'12px',padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>
      
    </div>
    
      <Tag color="geekblue">geekblue</Tag>
      
    
    
   
  </div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px' ,position:'relative'}}>
    <h3>Name of Food</h3>

    <p style={{ marginTop: '5px', fontSize: '14px', color: '#333' ,textAlign:'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
      <button style={{ marginLeft:'12px',padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>
      
    </div>
    
      <Tag color="geekblue">geekblue</Tag>
      
    
    
   
  </div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px' ,position:'relative'}}>
    <h3>Name of Food</h3>

    <p style={{ marginTop: '5px', fontSize: '14px', color: '#333' ,textAlign:'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
      <button style={{ marginLeft:'12px',padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>
      
    </div>
    
      <Tag color="geekblue">geekblue</Tag>
      
    
    
   
  </div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px' ,position:'relative'}}>
    <h3>Name of Food</h3>

    <p style={{ marginTop: '5px', fontSize: '14px', color: '#333' ,textAlign:'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
      <button style={{ marginLeft:'12px',padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>
      
    </div>
    
      <Tag color="geekblue">geekblue</Tag>
      
    
    
   
  </div>

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px' ,position:'relative'}}>
    <h3>Name of Food</h3>

    <p style={{ marginTop: '5px', fontSize: '14px', color: '#333' ,textAlign:'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
      <button style={{ marginLeft:'12px',padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>
      
    </div>
    
      <Tag color="geekblue">geekblue</Tag>
      
    
    
   
  </div>


</div>
</div>
    </>
  )
}

function generateFoodList(numItems) {
  const foodAdjectives = ["Spicy", "Sweet", "Crispy", "Juicy", "Fresh", "Grilled", "Baked", "Marinated", "Savory"];
  const foodNouns = ["Noodles", "Burger", "Pizza", "Pasta", "Tacos", "Burrito", "Salad", "Soup", "Sandwich", "Wrap", "Chicken", "Beef", "Fish", "Shrimp", "Tofu", "Vegetables", "Fruits", "Curry", "Stir-Fry", "Pancakes", "Waffles", "Ice Cream", "Cake", "Pie", "Cookies"];

  const foodList = [];
  for (let i = 0; i < numItems; i++) {
    const adjective = foodAdjectives[Math.floor(Math.random() * foodAdjectives.length)];
    const noun = foodNouns[Math.floor(Math.random() * foodNouns.length)];
    const label = `${adjective} ${noun}`;

    foodList.push({ label });
  }

  return foodList;
}

const menu = generateFoodList(30);
console.log(menu);


const southIndianMenu = [
  { label: "Masala Dosa" },
  { label: "Plain Dosa" },
  { label: "Rava Dosa" },
  { label: "Set Dosa" },
  { label: "Onion Uttapam" },
  { label: "Tomato Uttapam" },
  { label: "Cheese Uttapam" },
  { label: "Vegetable Uttapam" },
  { label: "Idli Sambar" },
  { label: "Idli Vada" },
  { label: "Vada Curry" },
  { label: "Sambar Rice" },
  { label: "Rasam Rice" }
  ,{label: "Lemon Rice" },
  { label: "Curd Rice" },
  { label: "Upma" },
  { label: "Pongal" },
  { label: "Poori Masala" },
  { label: "Bonda Soup" },
  { label: "Madras Filter Coffee" },
  { label: "Filter Coffee" },
  { label: "Masala Chai" },
  { label: "Filter Tea" },
  { label: "Plain Dosa (Set of 2)" },
  { label: "Masala Dosa (Set of 2)" },
  { label: "Onion Uttapam (Set of 2)" },
  { label: "Vegetable Uttapam (Set of 2)" },
  { label: "Mini Idli (Set of 6)" },
  { label: "Cheese Dosa" },
  { label: "Paper Roast" },
  { label: "Ghee Roast" },
  { label: "Chilly Cheese Dosa" },
  { label: "Onion Rava Dosa" },
];




// let tabData = [
//   {
//     label:'Masala Uttapam Vireties',
//     children:
//   }
// ]
const App = () => {
// Function to parse query parameters from URL
function getQueryParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Parse response parameters from URL
const txnId = getQueryParameterByName('txnId');
const responseCode = getQueryParameterByName('responseCode');
const approvalRefNo = getQueryParameterByName('ApprovalRefNo');
const status = getQueryParameterByName('Status');
const txnRef = getQueryParameterByName('txnRef');

// Handle the response parameters accordingly
if (status === 'SUCCESS') {
  // Transaction was successful, handle accordingly
  //alert('Transaction successful');
} else {
  // Transaction failed, handle accordingly
 // alert('Transaction failed');
}

  return (
    <>
BHARATPE.90070065432@fbpe&pn=Verified Merchant
0-
{/* upi://pay?pa=nadeem@npci&pn=nadeem%20chinna&mc=0000&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894
398cndhcd23&tn=Pay%20to%20mystar%20store&am=10&mam=null&cu=INR&url=https://mystar.co
m/orderid=9298yw89e8973e87389e78923ue892&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvs
vsbsjn&orgid=00000&mid=1234&msid=3432&mtid=1212 */}
  <a href="upi://pay?pa=BHARATPE.90070065432@fbpe&pn=Verified Merchant&am=1&mam=null&cu=INR&url=https://dev-fuelsense.iotronsys.com&mode=01&orgid=000000&tn=Pay to BharatPe Merchant&sign=638f5899660bb086e57c0d22189a96e15c12f64806563e0b44a5df727a2da3e9">payment</a>


{/* <a href={`upi://pay?pa=7875853859@paytm&pn=anurag&tn=TestUPI&am=1&cu=INR&url=https://dev-fuelsense.iotronsys.com&orgid=000000&mode=00&sign=ad268a425a3fddecda3a23681d2259f075d331d56fcd3b7fc1057113ad8623cb
`}>akaak</a> */}
{/* <a href={`upi://pay?pa=7875853859@paytm&pn=anurag&tn=Test%20UPI&am=1&cu=INR&sign=aagshd4542bdhhvdshsbvqfqttsvs
vsbsj&url=${encodeURIComponent("https://dev-fuelsense.iotronsys.com/dashboard/orderid=9298yw89e8973e87389e78923ue892")}&orgid=00000`}>akaak</a> */}


 <Header style={{display:'flex',flexDirection:'column',justifyContent:'center',backgroundColor:'white',borderBottom: '1px solid #ddd',height:'100px',padding:'12px', position: 'sticky',
          top: 0,
          zIndex: 1,}}>
      <Row justify="space-between" align="middle" gutter={[16,16]} >
        <Col xs={18} sm={8} md={8} lg={12} >
          <div style={{display:'flex'}}>
          <div className="logo-container">
           
           <img src="https://cdn.dotpe.in/logo/5850/CE_updated_logo_Orange_(2).jpg" style={{height:'50px',width:'50px'}}/>
       
          </div>
          
        
          
          </div>
        </Col>
        <Col  xs={0} sm={0} md={11} lg={8}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Input size="large" placeholder="Search For Items..." prefix={<SearchOutlined/>} />

          </div>
        </Col>
        <Col  xs={6} sm={4} md={4} lg={4}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'70px',border:'1px solid black',height:'40px'}}>
            <span style={{}}>Veg</span>
          <Switch size="small" defaultChecked />

          </div>
        </Col>
        <Col  xs={24} sm={11} md={0} lg={0}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Input size="large" placeholder="Search For Items..." prefix={<SearchOutlined/>} />

          </div>
        </Col>
      </Row>
    </Header>










<div style={{margin:'12px'}}>




<div style={{ display: 'flex', flexDirection: 'column' }}>
  <h2 style={{marginLeft:'35px'}}>Menu</h2> 

      <Tabs
        defaultActiveKey="1"
        tabPosition={'left'}
        style={{
          height:400,
         
        }}
        items={new Array(30).fill(null).map((_, i) => {
          const id = String(i);
          return {
            label:southIndianMenu[id].label,
            key: id,
            disabled: i === 28,
            children:d(),
          };
        })}
      />
      </div>
      </div>











     

  






    </>
  );
};
export default App;