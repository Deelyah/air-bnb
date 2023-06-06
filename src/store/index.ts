import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface IGenCode {
  link: string;
}
// define your typings for the store state
export interface State {
  generatedCodes: IGenCode[];
}

// @ts-ignore
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    generatedCodes: [],
  },

  mutations: {
    createCode(state, payload: IGenCode) {
      state.generatedCodes.push(payload);
    },
  },
});
