import React, { useState } from 'react';
import './a.css';
import { Radio, Tabs } from 'antd';
import { Layout, Input, Button, Row, Col, Switch, Card } from 'antd';
import { Route, useLocation, Routes } from 'react-router-dom';
import Cookies from "js-cookie";

import QueryString from 'query-string';

const { Header, Content, Footer } = Layout;
import { ConsoleSqlOutlined, SearchOutlined } from '@ant-design/icons';
import { Divider, Flex, Tag } from 'antd';
import io from 'socket.io-client'
import toast, { Toaster } from 'react-hot-toast';

//node js  const socket = io.connect('https://8b531e0e-eb1d-4615-a175-1d03aed63513-00-14eudonfdu6o9.pike.replit.dev')
// socket.on("connect", () => {
//   console.log("Socket connected");
// });
// socket.on('baby',(e)=>console.log(e))
//node js fetch('https://8b531e0e-eb1d-4615-a175-1d03aed63513-00-14eudonfdu6o9.pike.replit.dev/p').then(e=>e.json()).then(e=>console.log(e))
// const socket = io.connect('https://17174cc3-e036-41c5-82a6-1ce90c624cd6-00-2oq5i07bzmsdh.pike.replit.dev:5000')
// socket.on("connect", () => {
//   console.log("Socket connected");
// });
// socket.on('payment_response',(e)=>console.log(e))


// fetch('https://8b531e0e-eb1d-4615-a175-1d03aed63513-00-14eudonfdu6o9.pike.replit.dev/', { withCredentials: true }).then(e => e.json()).then(r => console.log(r, "popo"))
// //fetch('https://17174cc3-e036-41c5-82a6-1ce90c624cd6-00-2oq5i07bzmsdh.pike.replit.dev:5000/js').then(e=>e.json()).then(e=>console.log(e))
// console.log(Cookies)
const d = () => {
  return (
    <>

      <div style={{ height: "50px", width: '100px', backgroundColor: '#FFD369' }}>#FFD369</div>
      <div style={{ height: "50px", width: '100px', backgroundColor: '#FFF6DC' }}>#FFF6DC</div>
      <div style={{ height: "50px", width: '100px', backgroundColor: '#A3BB98' }}>#A3BB98</div>
      <div style={{ height: "50px", width: '100px', backgroundColor: '#222831' }}>#222831</div>


      <div style={{ height: '400px', overflowY: 'scroll' }}>

        <h1>Recommended Items</h1>
        <div style={{ display: 'flex', justifyConteent: 'space-around', flexWrap: 'wrap', gap: '12px' }}>


          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px', position: 'relative' }}>
            <h3>Name of Food</h3>

            <p style={{ marginTop: '5px', fontSize: '14px', color: '#333', textAlign: 'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
              <button style={{ marginLeft: '12px', padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>

            </div>

            <Tag color="geekblue">geekblue</Tag>




          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px', position: 'relative' }}>
            <h3>Name of Food</h3>

            <p style={{ marginTop: '5px', fontSize: '14px', color: '#333', textAlign: 'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
              <button style={{ marginLeft: '12px', padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>

            </div>

            <Tag color="geekblue">geekblue</Tag>




          </div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px', position: 'relative' }}>
            <h3>Name of Food</h3>

            <p style={{ marginTop: '5px', fontSize: '14px', color: '#333', textAlign: 'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
              <button style={{ marginLeft: '12px', padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>

            </div>

            <Tag color="geekblue">geekblue</Tag>




          </div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px', position: 'relative' }}>
            <h3>Name of Food</h3>

            <p style={{ marginTop: '5px', fontSize: '14px', color: '#333', textAlign: 'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
              <button style={{ marginLeft: '12px', padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>

            </div>

            <Tag color="geekblue">geekblue</Tag>




          </div><div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px', position: 'relative' }}>
            <h3>Name of Food</h3>

            <p style={{ marginTop: '5px', fontSize: '14px', color: '#333', textAlign: 'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
              <button style={{ marginLeft: '12px', padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>

            </div>

            <Tag color="geekblue">geekblue</Tag>




          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '250px', backgroundColor: '#fff', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', margin: '10px', padding: '15px', position: 'relative' }}>
            <h3>Name of Food</h3>

            <p style={{ marginTop: '5px', fontSize: '14px', color: '#333', textAlign: 'justify' }}>A short description of the foodshort description of the foodshort description of the foodfgfggdgdfgd.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <p style={{ fontWeight: 'bold', fontSize: '16px' }}>$<span>10.99</span></p>
              <button style={{ marginLeft: '12px', padding: '5px 10px', border: 'none', borderRadius: '3px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}>Add</button>

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
  , { label: "Lemon Rice" },
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
  function handelUserComeback() {
    if (document.visibilityState === 'visible' && localStorage.getItem('paymentInitiated')) {
      alert('poppo')
      localStorage.removeItem('paymentInitiated');
    }
  }
  React.useEffect(() => {

    window.addEventListener('visibilitychange', handelUserComeback)
    return () => { window.removeEventListener('visibilitychange') }
  }, [])

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
    const result = await fetch('https://8b531e0e-eb1d-4615-a175-1d03aed63513-00-14eudonfdu6o9.pike.replit.dev:9000/create-order', { method: 'POST' });
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
      "order_id": order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
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











  const [paymentState, setPaymentState] = useState({
    status: '',
    txnRef: '',
  });

  //gpay start


  //can make payment checking for browser supporting 
  /**
   *
   * @private
   * @param {PaymentRequest} request The payment request object.
   * @return {Promise} a promise containing the result of whether can make payment.
   */
  const canMakePaymentCache = 'canMakePaymentCache';

  async function checkCanMakePayment(request) {
    // Check canMakePayment cache, use cache result directly if it exists.
    if (sessionStorage.hasOwnProperty(canMakePaymentCache)) {
      return Promise.resolve(JSON.parse(sessionStorage[canMakePaymentCache]));
    }
    // If canMakePayment() isn't available, default to assume the method is
    // supported.
    var canMakePaymentPromise = Promise.resolve(true);

    // Feature detect canMakePayment().
    if (request.canMakePayment) {
      canMakePaymentPromise = request.canMakePayment();
    }

    return canMakePaymentPromise
      .then((result) => {
        // Store the result in cache for future usage.
        sessionStorage[canMakePaymentCache] = result;
        return result;
      })
      .catch((err) => {
        console.log('Error calling canMakePayment: ' + err);
      });
  }


  /** Launches payment request flow when user taps on buy button. */
  function onBuyClicked() {
    if (!window.PaymentRequest) {
      console.log('Web payments are not supported in this browser.');
      return;
    }

    // Create supported payment method.
    const supportedInstruments = [
//       Google Pay and Phonepe use this.

// GPAY - tez:- tez://upi/pay?pa=9000000009@upi&pn=User1&tn=Test UPI&am=20&cu=INR&mc=1234&tr=01234

// PHONEPAY - phonepe:- phonepe://pay?pa=9000000009@upi&pn=User1&tn=Test UPI&am=20&cu=INR&mc=1234&tr=01234
//       {paytmmp://pay?pa=9000000009@upi&pn=User1&tn=Test UPI&am=20&cu=INR&mc=1234&tr=01234
       { supportedMethods: ['https://tez.google.com/pay','https://paytmp.com/pay'],
        data: {
          pa: '7875853859@pthdfc',
          pn: 'Anurag Tiwari-1',
          tr: '58w1ss2AeeeeeB7puDe',// your custom transaction reference ID
          url: 'https://17174cc3-e036-41c5-82a6-1ce90c624cd6-00-2oq5i07bzmsdh.pike.repslit.dev:5000',
          mc: '5812', // your merchant category code
        },
      }
    ];

    // Create order detail data.
    const details = {
      total: {
        label: 'Total',
        amount: {
          currency: 'INR',
          value: '1.00', // sample amount
        },
      },
      displayItems: [{
        label: 'Original Amount',
        amount: {
          currency: 'INR',
          value: '1.00',
        },
      }],
    };

    // Create payment request object.
    let request = null;
    try {
      request = new PaymentRequest(supportedInstruments, details);
    } catch (e) {
      alert('Payment Request Error: ' + JSON.stringify(e.message));
      console.log('Payment Request Error: ' + e.message);
      return;
    }
    if (!request) {
      console.log('Web payments are not supported in this browser.');
      return;
    }

    var canMakePaymentPromise = checkCanMakePayment(request);
    canMakePaymentPromise
      .then((result) => {
        showPaymentUI(request, result);
      })
      .catch((err) => {
        alert('Error calling checkCanMakePayment: ' + JSON.stringify(err));
        console.log('Error calling checkCanMakePayment: ' + err);
      });
  }



  /**
  * Show the payment request UI.
  *
  * @private
  * @param {PaymentRequest} request The payment request object.
  * @param {Promise} canMakePayment The promise for whether can make payment.
  */
  function showPaymentUI(request, canMakePayment) {
    if (!canMakePayment) {
      alert('not ready to pay');
      //handleNotReadyToPay();
      return;
    }

    // Set payment timeout.
    let paymentTimeout = window.setTimeout(function () {
      window.clearTimeout(paymentTimeout);
      request.abort()
        .then(function () {
          console.log('Payment timed out after 20 minutes.');
          alert('Payment timed out after 20 minutes.');
        })
        .catch(function () {
          console.log('Unable to abort, user is in the process of paying.');
          alert('Unable to abort, user is in the process of paying.');
        });
    }, 20 * 60 * 1000); /* 20 minutes */

    request.show()
      .then(function (instrument) {

        window.clearTimeout(paymentTimeout);
        // const status = instrument.details.Status;
        // const txnRef = instrument.details.txnRef;

        // setPaymentState({ status, txnRef });

        //alert(JSON.stringify(instrument)+'error showPayment ui show() then');
        processResponse(instrument); // Handle response from browser.
      })
      .catch(function (err) {
        //alert(JSON.stringify(instrument)+'error showPayment ui show() catch');
        alert({ p: 9 }.p + 'error showPayment ui show() catch');

        console.log(err);
      });
  }


/**
* Process the response from browser.
*
* @private
* @param {PaymentResponse} instrument The payment instrument that was authed.
*/
function processResponse(instrument) {
  var instrumentString = instrumentToJsonString(instrument);
  console.log(instrumentString);
 
  // fetch('https://c0ccd437-87bb-4fd4-b585-6ef2b6165e6e-00-xn5f3f0kqnav.sisko.replit.dev/',{
  //   method: 'POST',
  //   headers: new Headers({'Content-Type': 'application/json'}),
  //   body: instrumentString,
  // })
  //     .then(function(buyResult) {
  //       if (buyResult.ok) {
  //         return buyResult.json();
  //       }
  //       console.log('Error sending instrument to server.');
  //     })
  //     .then(function(buyResultJson) {
  //       completePayment(instrument, buyResultJson.status, buyResultJson.message);
 
  //     })
  //     .catch(function(err) {
  //       console.log('Unable to process payment. ' + err);
  //     });
 }
 
 /**
 * Notify browser that the instrument authorization has completed.
 *
 * @private
 * @param {PaymentResponse} instrument The payment instrument that was authed.
 * @param {string} result Whether the auth was successful. Should be either
 * 'success' or 'fail'.
 * @param {string} msg The message to log in console.
 */
 function completePayment(instrument, result, msg) {
  instrument.complete(result)
      .then(function() {
        console.log('Payment succeeds.');
        console.log(msg);
      })
      .catch(function(err) {
        console.log(err);
      });
 }
 


 /** Converts the payment response into a JSON string.
 *
 * @private
 * @param {PaymentResponse} paymentResponse The payment response to convert.
 * @return {string} The string representation of the payment response.
 */
function instrumentToJsonString(paymentResponse) {
  // PaymentResponse is an interface, JSON.stringify works only on dictionaries.
  var paymentResponseDictionary = {
    methodName:paymentResponse.methodName,
    details:paymentResponse.details,
    // shippingAddress: addressToJsonString(paymentResponse.shippingAddress),
    shippingOption: paymentResponse.shippingOption,
    payerName: paymentResponse.payerName,
    payerPhone: paymentResponse.payerPhone,
    payerEmail: paymentResponse.payerEmail,
  };
  return JSON.stringify(paymentResponseDictionary, undefined, 2);
}



  // if(checkCanMakePayment()){
  //paymentRequest()
  // }


  // alert(JSON.stringify(instrument)+'error showPayment ui show() then');

  // {"requestId":"ac121519-90a9-42fa-87a5-9f2d799bd792"
  // ,"methodName":"https://tez.google.com/pay"
  // ,"details":{"tezResponse":"{\"Status":\"SUCCESS"
  // Jamount":"1.00\",\"txnRef\":\"5812ABpuDel
  // J'toVpal:7875853859@pthdfc\",\"txnId\":
  // \'AXIcb3aef9b3391467ab66673ff942ac0a3\"
  // responseCode\":\"0\"}","txnl
  // d":"AXIcb3aef9b3391467ab66673ff942ac0a3","responseC
  // ode":"0","Approval RefNo":"","
  // Status":"SUCCESS","txnRef":"5812ABpuDe", "TrtxnRef":"581
  // 2ABpuDe","signature":"304
  // 5022100fbfd57e92daa017c42afb262a63796357777335cc
  // 29da2e925a2adad96a081c702200711e
  // 61c32092f0f2436baab0150706f988b6ab1575fee06081cal
  // f6d2ffdffdd","signatureKeyld":"P
  // AYMENT RESPONSE V2"},"shippingAddress":null,"shipping
  // Option":null,"payerName":nu
  // II," payerEmail":null,"payerPhone":null}




  return (
    <>
<Toaster />
    <button onClick={()=>{
     toast.error('Successfully created!',{
      style: {
       color:'red',
      },
      duration: 2000,
  position: 'top-center',
     });
    }}>toast</button>
      <div>
        <p>Status: {paymentState?.status}</p>
        <p>TxnRef: {paymentState?.txnRef}</p>
      </div>
      <p onClick={() => {
        onBuyClicked();
      }}>onBuyClicked</p>



      <p onClick={() => {
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

      <br />


      <br />


      {/* upi://pay?pa=nadeem@npci&pn=nadeem%20chinna&mc=0000&tid=cxnkjcnkjdfdvjndkjfvn&tr=4894
398cndhcd23&tn=Pay%20to%20mystar%20store&am=10&mam=null&cu=INR&url=https://mystar.co
m/orderid=9298yw89e8973e87389e78923ue892&mode=00&sign=aagshd4542bdhhvdshsbvqfqttsvs
vsbsjn&orgid=00000&mid=1234&msid=3432&mtid=1212 */}
      {/* kk.payutest@hdfcbank
pi://pay?pa=payu@axisbank&pn=SMSPLUS&tr=8312916361&am=10.17 */}
      < a href='upi://pay?pa=kk.payutest@hdfcbank&pn=demo&tr=403993715531809596&tid=PPPL403993715531809596240624231049&am=10.00&cu=INR&tn=UPIIntent' >TRY THIS</a>
      upi://pay?pa=kk.payutest@hdfcbank&pn=demo&tr=a07d45110c80e17cbbe5e8eb7f29ceabb37186e5435c9129dbbc5e72b5eb3734&am=10.00
      < a href='upi://pay?pa=7875853859@paytm&pn=Anurag&cu=INR&am=1.00&tn=Payment%20for%20services' onClick={() => handlePayClick()}>anurag</a>
      <button onClick={() => {

        //  localStorage.setItem('po',12)
        localStorage.setItem('paymentInitiated', true)
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
        <Route path='/' element={<><Header style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', borderBottom: '1px solid #ddd', height: '100px', padding: '12px', position: 'sticky',
          top: 0,
          zIndex: 1,
        }}>0
          <Row justify="space-between" align="middle" gutter={[16, 16]} >
            <Col xs={18} sm={8} md={8} lg={12} >
              <div style={{ display: 'flex' }}>
                <div className="logo-container">

                  <img src="https://cdn.dotpe.in/logo/5850/CE_updated_logo_Orange_(2).jpg" style={{ height: '50px', width: '50px' }} />

                </div>



              </div>
            </Col>
            <Col xs={0} sm={0} md={11} lg={8}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Input size="large" placeholder="Search For Items..." prefix={<SearchOutlined />} />

              </div>
            </Col>
            <Col xs={6} sm={4} md={4} lg={4}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '70px', border: '1px solid black', height: '40px' }}>
                <span style={{}}>Veg</span>
                <Switch size="small" defaultChecked />

              </div>
            </Col>
            <Col xs={24} sm={11} md={0} lg={0}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Input size="large" placeholder="Search For Items..." prefix={<SearchOutlined />} />

              </div>
            </Col>
          </Row>
        </Header>










          <div style={{ margin: '12px' }}>




            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ marginLeft: '35px' }}>Menu</h2>

              <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                style={{
                  height: 400,

                }}
                items={new Array(30).fill(null).map((_, i) => {
                  const id = String(i);
                  return {
                    label: southIndianMenu[id].label,
                    key: id,
                    disabled: i === 28,
                    children: d(),
                  };
                })}
              />
            </div>
          </div></>} />





      </Routes>















    </>
  );
};
export default App;