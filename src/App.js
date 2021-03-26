import './App.css';
import MyApp from "./MyApp";
import MyFirstClassComponent from './MyFirstClassComponent';
import MyFirstComponent from "./MyFirstCompoent";
import {useSelector} from 'react-redux';

function App() {
  const myStoreData = useSelector(state => state);
  console.log(myStoreData, "=====================");
  return (
    <div className="App">
      <header className="App-header">
       <h1 className="my_header">Hey this my first project {myStoreData && myStoreData.myData}</h1>
      </header>
      <MyApp a ="Yashwanth"
       myData1="Hello" myDataArray={[1,2,3,4]} />
      <MyFirstComponent name="Thisksdvnlkczsvnlkxmvlkx" />
      <MyFirstClassComponent mydatahere="Hey this the the data paragraph" myData2="kjvncmn" />
    </div>
  );
}

export default App;
