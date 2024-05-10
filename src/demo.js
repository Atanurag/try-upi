import React, { useState } from 'react';
import './a.css';
import { Radio, Tabs } from 'antd';
import { Layout, Input, Button, Row, Col,Switch,Card  } from 'antd';
import { Route, useLocation,Routes } from 'react-router-dom';

import QueryString from 'query-string';

const { Header, Content, Footer } = Layout;
import { ConsoleSqlOutlined, SearchOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag } from 'antd';
import io from 'socket.io-client'
//node js  const socket = io.connect('https://8b531e0e-eb1d-4615-a175-1d03aed63513-00-14eudonfdu6o9.pike.replit.dev')
// socket.on("connect", () => {
//   console.log("Socket connected");
// });
// socket.on('baby',(e)=>console.log(e))
//node js fetch('https://8b531e0e-eb1d-4615-a175-1d03aed63513-00-14eudonfdu6o9.pike.replit.dev/p').then(e=>e.json()).then(e=>console.log(e))
const socket = io.connect('https://17174cc3-e036-41c5-82a6-1ce90c624cd6-00-2oq5i07bzmsdh.pike.replit.dev:5000')
socket.on("connect", () => {
  console.log("Socket connected");
});
socket.on('payment_response',(e)=>console.log(e))

//fetch('https://17174cc3-e036-41c5-82a6-1ce90c624cd6-00-2oq5i07bzmsdh.pike.replit.dev:5000/js').then(e=>e.json()).then(e=>console.log(e))

const d = ()=>{
  return(
    <>

<div style={{height:"50px",width:'100px',backgroundColor:'#FFD369'}}>#FFD369</div>
<div style={{height:"50px",width:'100px',backgroundColor:'#FFF6DC'}}>#FFF6DC</div>
<div style={{height:"50px",width:'100px',backgroundColor:'#A3BB98'}}>#A3BB98</div>
<div style={{height:"50px",width:'100px',backgroundColor:'#222831'}}>#222831</div>


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
import useRazorpay from "react-razorpay";
const App = () => {
// Function to parse query parameters from URL

// Handle the response parameters accordingly


// React.useEffect(()=>{
//   if(localStorage.getItem('po') == 12){
//     alert('ppopo');
//     localStorage.removeItem('po')
//   }
// },[location])

// React.useEffect(() => {
//   const searchParams = new URLSearchParams(location.search);
//   const status = searchParams?.get('status');

//   if (status === 'success') {
//     alert('Your payment was successful!');
//   } else {
//     // Handle other statuses or lack thereof
//     alert('Welcome back! Check your payment status.');
//   }
// }, [location]);
function handelUserComeback(){
  if(document.visibilityState === 'visible' && localStorage.getItem('paymentInitiated')){
    alert('poppo')
    localStorage.removeItem('paymentInitiated');
  }
}
React.useEffect(()=>{
  
  window.addEventListener('visibilitychange',handelUserComeback)
 return ()=> {window.removeEventListener('visibilitychange')}
},[])

const [showContent, setShowContent] = React.useState(false);

React.useEffect(() => {
  const storedState = localStorage.getItem('showContent');
  setShowContent(storedState === 'true');
}, []); // Empty dependency array to run only once

const handlePayClick = () => {
  setShowContent(true);
  localStorage.setItem('showContent', true);
};

function loadScript(src) {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
          resolve(true);
      };
      script.onerror = () => {
          resolve(false);
      };
      document.body.appendChild(script);
  });
}
async function displayRazorpay() {
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  // creating a new order
  const result = await fetch('https://8b531e0e-eb1d-4615-a175-1d03aed63513-00-14eudonfdu6o9.pike.replit.dev:9000/create-order',{method:'POST'});
  let js = await result.json()

  if (!js) {
      alert("Server error. Are you online?");
      return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = js;

  var options = {
    "key": "rzp_test_LvLqoT1Xo29wnc", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id":  order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);

rzp1.open();
}


  return (
    <>

<p onClick={()=>{
        displayRazorpay()
      }}>d</p>


{showContent && 'poppdfdsfdsf'}


      {/* {paymentRequest && (
        <div>
          <p>Please select a UPI app to complete the payment:</p>
          <ul>
            {paymentRequest.canMakePayment.map((canMakePayment) => (
              <li key={canMakePayment.method}>{canMakePayment.method}</li>
            ))}
          </ul>
        </div>
      )} */}

<br/>


<br/>


{/* upi://pay?pa=nadeem@npci&pn=nadeem%20chinna&mc=0000&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894
398cndhcd23&tn=Pay%20to%20mystar%20store&am=10&mam=null&cu=INR&url=https://mystar.co
m/orderid=9298yw89e8973e87389e78923ue892&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvs
vsbsjn&orgid=00000&mid=1234&msid=3432&mtid=1212 */}


< a href='upi://pay?pa=7875853859@paytm&pn=Anurag&cu=INR&am=1.00&tn=Payment%20for%20services' onClick={()=>handlePayClick()}>anurag</a>
<button onClick={()=>{

//  localStorage.setItem('po',12)
localStorage.setItem('paymentInitiated',true)
console.log('added')

}


}><a href="upi://pay?pa=shivaytiwari951@oksbi&pn=YourName&tr=780ttryr345ms&tn=Paymentservices&am=1&cu=INR&url=https://abc.com/">Pay with UPI 1 inr</a></button>
  {/* <a href="upi://pay?pa=BHARATPE.90070065432@fbpe&pn=Verified Merchant&mc=0000&tr=hello78340&tn=Pay to BharatPe Merchant&am=1&cu=INR">payment</a>

ab
<a href="upi://pay?pa=BHARATPE.90070065432@fbpe&pn=Verified Merchant&am=1&cu=INR&tn=Pay to BharatPe Merchant">Pay INR 1</a>

< a href='upi://pay?pa=BHARATPE.90070065432@fbpe&cu=INR'>pay 1</a>

< a href='upi://pay?pa=BHARATPE.9007065432@fbpe&pn=YourBusinessName&am=1.00&cu=INR&mode=01&tid=aRandomTxn12345&tr=aRef12345&tn=PaymentForGoods'>pay 00</a> */}

Merchant
<a href={`upi://pay?pa=BHARATPE90727475218@yesbankltd&tr=tgert553gt5465gsg644w5g5t56ge6y4te&pn=Verified%20Merchant&cu=INR&tn=PaytoBharatPeMerchant&url=${window.location.href}/STATUS`}>merchant</a>

{/* <a href={`upi://pay?pa=7875853859@paytm&pn=anurag&tn=TestUPI&am=1&cu=INR&url=https://dev-fuelsense.iotronsys.com&orgid=000000&mode=00&sign=ad268a425a3fddecda3a23681d2259f075d331d56fcd3b7fc1057113ad8623cb
`}>akaak</a> */}
{/* <a href={`upi://pay?pa=7875853859@paytm&pn=anurag&tn=Test%20UPI&am=1&cu=INR&sign=aagshd4542bdhhvdshsbvqfqttsvs
vsbsj&url=${encodeURIComponent("https://dev-fuelsense.iotronsys.com/dashboard/orderid=9298yw89e8973e87389e78923ue892")}&orgid=00000`}>akaak</a> */}
<Routes>
<Route path='/' element={<><Header style={{display:'flex',flexDirection:'column',justifyContent:'center',backgroundColor:'white',borderBottom: '1px solid #ddd',height:'100px',padding:'12px', position: 'sticky',
          top: 0,
          zIndex: 1,}}>0
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
      </div></>}/>
 




      </Routes>






     

  






    </>
  );
};
export default App;