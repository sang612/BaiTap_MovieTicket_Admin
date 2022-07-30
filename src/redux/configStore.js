import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { AuthReducer } from "./reducers/AuthReducer";

const rootReducer = combineReducers({
  // state ung dung
  QuanLyPhimReducer,
  QuanLyNguoiDungReducer,
  AuthReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
