import Vue from "vue";
import Vuex from "vuex";
import { safe_get, safe_set } from "@/configs/storage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
  },
  getters: {
    notes(state) {
      return state.notes;
    },
  },
  mutations: {
    ADD_NOTE(state, payload) {
      state.notes = payload;
    },
  },
  actions: {
    addNote(context, payload) {
      let notes = safe_get("notes");
      notes = notes == null ? [] : notes;
      notes.push(payload);
      context.commit("ADD_NOTE", notes);
      safe_set("notes", notes);
    },
    getNotes(context, payload) {
      if (payload) {
        context.commit(
          "ADD_NOTE",
          Array.isArray(payload) ? payload : [payload]
        );
      }
    },
    removeNote(context, payload) {
      let noteList = context.getters.notes;
      noteList.splice(payload, 1);
      context.commit("ADD_NOTE", noteList);
      safe_set("notes", noteList);
    },
  },
  modules: {},
});
