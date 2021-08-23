import React from 'react'
import {Bar , Line} from 'react-chartjs-2';

const ChartPage = ({inputData,chartSelection}) => {
    const Labels = inputData.map(val => val.name);
    const dataval = inputData.map(val=> val.amount);

    const ChartData = {
        labels : Labels,
        datasets : [
            {
                label : "User Salary",
                data : dataval,
                backgroundColor: 'rgba(3,117,180,1)',
                borderColor : 'rgba(0,0,0,1)',
                borderWidth : 2,
            }
        ]
    }
    const option={
        maintainAspectRatio :false,
        title : {
            display:true,
            text : 'Bar Chart example',
            fontSize:25,
            fontColor: '#000',
            
        },
        scales : {
            yAxes : [
                {
                    ticks:{
                        min:0,
                        max: 500,
                        stepSize: 20,
                        fontSize : 15,
                        fontColor : '#000',
                    }
                }
            ],
            xAxes: [
                {
                    ticks:{
                        fontSize:15,
                        fontColor:'#000'
                    }
                }
            ]
        }
    } 
    let BarChart = <p>No chart Selected</p>
    if(Labels.length >0 && dataval.length > 0 ){
        if(chartSelection === 'Bar'){
            BarChart = (<Bar  options={{option}} data={ChartData} ></Bar>);
        }
        else if(chartSelection === 'Line') {
            BarChart = (<Line options={{option}} data={ChartData}></Line>)
        }
    }

    return (
        <div>
           <div style={{paddingTop:'40px', width : '50%' , height:"400px" , display:"inline-flex" , backgroundColor:'antiquewhite'}}>
               {BarChart}
                
           </div>
        </div>
    )
}

export default ChartPage;
