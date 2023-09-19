import {createSlice} from '@reduxjs/toolkit';

const appslice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        isSidebarModal:false,
        isSidebarModalOpen:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        openMenu:(state)=>{
           state.isMenuOpen=true;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        makeSidebarModal:(state)=>{
            state.isSidebarModal=true;
        },
        destroySidebarModal:(state)=>{
            state.isSidebarModal=false;
        },
        openSidebarModal:(state)=>{
            state.isSidebarModalOpen=true;
        },
        closeSidebarModal:(state)=>{
            state.isSidebarModalOpen=false;
        }
    },
});

export const {toggleMenu,openMenu,closeMenu,makeSidebarModal,openSidebarModal,closeSidebarModal,destroySidebarModal}=appslice.actions;

export default appslice.reducer;