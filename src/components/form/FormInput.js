import React,{useState} from 'react';

const FormInput = (props) => {
    
    const [name,setName] = useState('');
    const [salary,setSalary] = useState(null);
  
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
        
        setName('');
        setSalary('');
       
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

                    <div style={{padding: '14px'}}>
                    <button type="submit" className="btn btn-primary mb-2">Confirm</button>
                    </div>
                </form>
                
            </div>
    )
}

export default FormInput;
