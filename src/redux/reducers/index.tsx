/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";


import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import movie from "redux/reducers/movie";
// import loading from "redux/reducers/loading.js";
// const persistConfig = {
//     key: "root",
//     storage: storage,
//     blacklist: ["auth"],
// };
// const authPersistConfig = {
//     key: "auth",
//     storage: storage,
//     blacklist: ['error', 'statusText', 'headers', 'config', 'request'],
// };
const eventPersistConfig = {
    key: "movie",
    storage: storage,
    // whitelist: ['team', 'detail_team']
};

const appReducer = combineReducers({
    movie: persistReducer(eventPersistConfig, movie),
    // auth: persistReducer(authPersistConfig, auth),
    // list: movie,
    // loading: loading,
});
const rootReducer = (state: any, action: any) => {
    if (action.type === "DO_LOGOUT") {
        localStorage.removeItem("token");
        localStorage.removeItem("phase");
        localStorage.removeItem("persist:root");
        localStorage.removeItem("persist:auth");
        localStorage.removeItem("persist:event");
        state = undefined;
    }

    return appReducer(state, action);
};
export default rootReducer
