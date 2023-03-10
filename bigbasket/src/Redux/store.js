import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import SearchReducer from "../Redux/SearchReducer/SearchReducer";
import CarouselReducer from "../Redux/CarouselReducer/CarouselReducer";
import ProductReducer from "../Redux/ProductReducer/ProductReducer";
import CartReducer from "./CartReducer/cartReducer";
import SingleProductReducer from "./SingleProductReducer/SingleProductReducer";
import AuthReducer from "./AuthReducer/Authreducer";
import signupReducer from "./SignUpReducer/signupReducer";

const rootReducer = combineReducers({
  SearchReducer,
  CarouselReducer,
  ProductReducer,
  CartReducer,
  SingleProductReducer,
  AuthReducer,
  signupReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
