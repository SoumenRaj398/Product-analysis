import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart,Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"
const Dashboard = () => {
    const data =[
        
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        
    ]
    return ( 
        <div className='rechart'>
             <div className='line-chart'>
                 <h1>Here is a LineChart of Our Product</h1>
              
              <LineChart width={400} height={500} data ={data}>
           <Line dataKey={"investment"}></Line>
           <Line dataKey={"revenue"}></Line>
           <XAxis dataKey ="month"></XAxis>
           <YAxis></YAxis>
           <Tooltip></Tooltip>

       </LineChart>
       </div>
        

 <div>

 <h1>Here is a BarChart of Our Product</h1>
       <BarChart
       
           width={500}
           height={500}
           data={data}
           margin ={{top:5,
        right:30,left:20,
        bottom:5

        }}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <Bar dataKey ="investment"></Bar>
            <Bar dataKey ="revenue"></Bar>
             <XAxis dataKey ='month'></XAxis>
       </BarChart>



        </div>
        </div>
       


             
          
    );
};

export default Dashboard;