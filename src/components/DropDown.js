import React,{useState} from 'react';
import { DropdownButton,Dropdown } from 'react-bootstrap';

const DropDown = (props) => {
    let selectChart1 = [{id:1, chartName: 'Bar'},{id:2 , chartName: 'Pie'}]
    const [selectChart,setSelectChart] = useState('');
    props.selectedChart(selectChart);
    return (
        <div>
            <form>
            <div >
                    <DropdownButton id="dropdown-basic-button" onClick={e=> setSelectChart(e.target.title)} title="Select Chart">
                    {/* <DropdownButton id="dropdown-basic-button" onClick={e=> props.selectedChart(e.target.title)} title="Select Chart"> */}
                    {selectChart1.map((val,index)=>(
                           
                           <Dropdown.Item value={val.id} title={val.chartName} key={index}>{val.chartName}</Dropdown.Item>
                      
                       ))}
                        
                    </DropdownButton>
                    </div>
            </form>
        </div>
    )
}

export default DropDown;
