import {Sidebar, SidebarModal} from './Sidebar.jsx';
import '../styles/Body.css'
import MainContainer from './MainContainer.jsx';
import { Route, Routes } from 'react-router-dom';
import WatchPage from './WatchPage.jsx';
import SearchPage from './SearchPage.jsx';
import { useSelector } from 'react-redux';
import CompressedSideBar from './CompressedSideBar.jsx';

const Body=()=>{
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    const isSidebarModal=useSelector(store=>store.app.isSidebarModal);
    return (
        <div className='body-container'>
            {isSidebarModal? null: isMenuOpen? <Sidebar/>:<CompressedSideBar/>}
           <Routes>
               <Route path='/' element={<MainContainer/>}/>
               <Route path='/watch' element={<WatchPage/>}/>
               <Route path='/search' element={<SearchPage/>}/>
           </Routes>
        </div>
    )
}

export default Body;