import { configureStore } from "@reduxjs/toolkit";

import appslice from "./appslice";
import suggestionslice from "./suggestionslice";

const store=configureStore({
    reducer:{
        app:appslice,
        suggestion:suggestionslice
    }
})

export default store;