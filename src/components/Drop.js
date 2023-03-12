import React, {useState} from "react";
import "../styles/drop.scss";
import "../styles/main.scss";



function Drop() {

    const checklist1 = ['Visit David'];
    const checklist2 = ['Goceries For Dinner'];
    const checklist3 = ['Fix Dad’s iPad'];

    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value]
        }
        else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    
    const isChecked = (item) => 
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

    return(
        <div className="list-container"> 
            <div>
                {checklist1.map((item, index) => (
                    <div key={index} className = "list-container_content">
                        <div className="line_red"> </div>
                        <div className="list-container_content_text">
                            <div className="text_column">
                                <span className={isChecked(item)}>{item}</span>
                                <p>Lorem Ipsum Dolor Sit met...</p>
                            </div>
                        </div>
                        <label className="toggle-control">
                            <input type="checkbox" value={item} onChange = {handleCheck}/>
                            <span className="control"></span>
                        </label>
                    </div>
                )
                )}
            </div>
            <div>
                {checklist2.map((item, index) => (
                    <div key={index} className = "list-container_content">
                        <div className="line_blue"> </div>
                        <div className="list-container_content_text">
                            <div className="text_column">
                                <span className={isChecked(item)}>{item}</span>
                                <p>Lorem Ipsum Dolor Sit met...</p>
                            </div>
                        </div>
                        <label className="toggle-control">
                            <input type="checkbox" value={item} onChange = {handleCheck}/>
                            <span className="control"></span>
                        </label>
                    </div>
                )
                )}
            </div>
            <div>
                {checklist3.map((item, index) => (
                    <div key={index} className = "list-container_content">
                        <div className="line_yellow"> </div>
                        <div className="list-container_content_text">
                            <div className="text_column">
                                <span className={isChecked(item)}>{item}</span>
                                <p>Lorem Ipsum Dolor Sit met...</p>
                            </div>
                        </div>
                        <label className="toggle-control">
                            <input type="checkbox" value={item} onChange = {handleCheck}/>
                            <span className="control"></span>
                        </label>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Drop;