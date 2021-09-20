// import { nameReducers } from "./name";
import { modalReducers } from "./modal";

export default function reducers(state, action) {
  return modalReducers(state, action);
  // return nameReducers(newState, action);
}
