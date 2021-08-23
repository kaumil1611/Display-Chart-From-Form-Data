import React,{useState} from 'react';
import './App.css';
import FormInput from './components/form/FormInput';
import ChartPage from './components/ChartPage';

function App() {
  const [inputData,setInputData] = useState([
    // {id: 'e1' ,name: 'Kaumil' ,amount: 200.40},
    // {id: 'e3' ,name: 'Hetvi' ,amount: 140},
    // {id:'e4' ,name: 'Pranav' ,amount: 150},
    // {id: 'e2' ,name: 'Kabir' ,amount: 300.20}
  ]);
  const [selectedChart,setSelectedChart] = useState('');
  const onInputDataHandler = (data) => {
      setInputData((prevData)=>{
        const updatedData = [...prevData];
        updatedData.push({id: Math.random().toString() , name : data.name , amount: data.salary });
        return updatedData;
      });
      
  }
  const onSelectedChart =(selectedYear)=>{
    setSelectedChart(selectedYear);
  }
  
  let displayDatas = <p>No data Found</p> ;
  if(inputData.length > 0){
    displayDatas = (<div className='chart'><ChartPage inputData={inputData} chartSelection={selectedChart}/></div>);
  }
  return (
    <div className="App">
      <FormInput onInputData={onInputDataHandler} selectedChart={onSelectedChart}/>
      {displayDatas}
    </div>
  );
}

export default App;
