import 'remixicon/fonts/remixicon.css'
import './App.css';
import Header from './components/Header.jsx'
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import {Routes,Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchPage from './components/SearchPage';



function App() {
  return (
    <Provider store={store}>
      <div className='app-container' >
        <Header/>
        <Body/>
       </div>
    </Provider>
    
  );
}

export default App;
