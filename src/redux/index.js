import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import viewReducer from "./reducers/views";

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

export const history = createHistory();

const reducers = combineReducers({
    router: routerReducer,
    views: viewReducer,
    // ui: uiReducer,
    // data: dataReducer,
});

const enhancer = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
    )
);

let Store = createStore(reducers, enhancer);

export default Store;