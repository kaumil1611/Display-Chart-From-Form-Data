import React,{useState} from 'react';
import { DropdownButton,Dropdown } from 'react-bootstrap';
const FormInput = (props) => {
    let selectChart1 = [{id:1, chartName: 'Bar'},{id:2 , chartName: 'Line'}]
    const [name,setName] = useState('');
    const [salary,setSalary] = useState(null);
    const [selectChart,setSelectChart] = useState(selectChart1[0].chartName);
    const onNameChangeHandler = (e) =>{
        setName(e.target.value);
    }
    const onSalaryChangeHandler = (e) =>{
        setSalary(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        const data= {
            name: name,
            salary : +salary,
        }
      
        props.onInputData(data);
        props.selectedChart(selectChart);
        setName('');
        setSalary('');
        setSelectChart('');
        document.myForm.reset();
    }
    return (
            <div>
                <form className="form-inline" onSubmit={submitHandler} name="myForm">
                    <div className="form-group mb-2">
                        <label htmlFor="yourname" className="sr-only">Name</label>
                        <input type="text" className="form-control" id="yourname" onChange={onNameChangeHandler} placeholder="Enter name" required />
                    </div>
                    <div className="form-group mx-sm-4 mb-2">
                        <label htmlFor="yoursalary" className="sr-only">Salary</label>
                        <input type="number" className="form-control" id="yoursalary" onChange={onSalaryChangeHandler} placeholder="Salary" required/>
                    </div>
                    <div style={{margin: '10px'}}>
                    <DropdownButton id="dropdown-basic-button" onClick={e=> setSelectChart(e.target.title)} title="Select Chart">
                    {/* <DropdownButton id="dropdown-basic-button" onClick={e=> props.selectedChart(e.target.title)} title="Select Chart"> */}
                    {selectChart1.map((val,index)=>(
                           
                           <Dropdown.Item value={val.id} title={val.chartName} key={index}>{val.chartName}</Dropdown.Item>
                      
                       ))}
                        
                    </DropdownButton>
                    </div>
                    <div style={{padding: '14px'}}>
                    <button type="submit" className="btn btn-primary mb-2">Confirm</button>
                    </div>
                </form>
            </div>
    )
}

export default FormInput;
