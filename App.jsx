// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
import './App.css'
 import PriceCard from './Pages/PriceCard';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  // const [data1, setdata1] = useState(0)
  const data=[{
    subscription: "FREE",
    pay: 0,
    features:[{istrue:true,value:"Single User"},
    {istrue:true, value:"50GB Storage"},
    {istrue: true, value:"Unlimited Public Projects"},
    {istrue: true, value:"Community Access"},
    {istrue: false, value:"Unlimited Private Projects"},
    {istrue: false, value:"Dedicated Phone Support"},
    {istrue: false, value:"Free Subdomain"},
    {istrue: false, value:"Monthly Status Reports"}
   ]},
            {
    subscription: "PLUS",
    pay: 9,
    features:[{istrue:true,value:"5 Users"},
    {istrue:true, value:"50GB Storage"},
    {istrue: true, value:"Unlimited Public Projects"},
    {istrue: true, value:"Community Access"},
    {istrue: true, value:"Unlimited Private Projects"},
    {istrue: true, value:"Dedicated Phone Support"},
    {istrue: false, value:"Free Subdomain"},
    {istrue: false, value:"Monthly Status Reports"}
   ]},
    {
  subscription: "PRO",
  pay: 49,
  features:[{istrue:true,value:"Unlimited Users"},
  {istrue:true, value:"50GB Storage"},
  {istrue: true, value:"Unlimited Public Projects"},
  {istrue: true,value:"Community Access"},
  {istrue: true, value:"Unlimited Private Projects"},
  {istrue: true, value:"Dedicated Phone Support"},
  {istrue: true, value:"Free Subdomain"},
  {istrue: true, value:"Monthly Status Reports"}
 ]}];
  
  return (
    
     <div className="container">
     {
       data.map((d,index)=>
         <PriceCard data={d} index={`price-card-${index}`} />
        
        
       )
      }
     
          
      
     </div>
   
  );
}

export default App
