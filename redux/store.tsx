import { createWrapper, MakeStore } from "next-redux-wrapper";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IInitialState, reducer } from "./reducer/exmple";

const makeStore: MakeStore<IInitialState> = () =>
  createStore(reducer, composeWithDevTools());

export const wrapper = createWrapper<IInitialState>(makeStore, {
  debug: false,
});
