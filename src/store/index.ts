import { createStore } from "vuex";
import { base } from "./modules/base";
export const store = createStore({
  modules: {
    base,
  },
});
