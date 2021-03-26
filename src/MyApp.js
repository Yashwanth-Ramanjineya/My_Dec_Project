import React, {useState, useEffect} from 'react';
function MyApp(props) {
    const [count, setCount] = useState(0);
    const [changedBy, setChangedBy] = useState("Raja");

    const handleMyFunctionClick = () => {
        setCount(count + 1);
        setChangedBy("Yashwanth")
    }

    useEffect(() => {
        console.log("U r state is Loaded");
    }, [])

    useEffect(() => {
        if (count > 1) {
            document.title = "My Project"
        }
        console.log("U r state is updated");
        
    }, [count])

    useEffect(() => {
        console.log("U r updating the changed by")
    }, [changedBy])

    
    return(
        <div>
            <p>Hey this is my second compoent {props.a} functionnnnnnnnnn {count}  {changedBy} </p>
            <button onClick={handleMyFunctionClick}>Update Counter</button>
        </div>
    )
}

export default MyApp;