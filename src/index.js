import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import MyApp from './MyApp';
import MyFirstClassComponent from './MyFirstClassComponent';
import MyFirstComponent from './MyFirstCompoent';
import NotFound from './NotFound';
import { createStore } from 'redux';
import myReducer from './myReducer';
import { Provider } from 'react-redux';

const myStore = createStore(myReducer);


const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myapp">MY App</Link></li>
        <li><Link to="/myfirstclass">MY First Class</Link></li>
        <li><Link to="/mySecondclass">My Second Class</Link></li> 
      </ul>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/myapp" component={MyApp} />
      <Route exact path="/myfirstclass" component={MyFirstClassComponent}/>
      <Route exact path="/mySecondclass" component={MyFirstComponent} />
      <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
    {routing}
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
