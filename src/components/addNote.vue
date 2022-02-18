<template>
  <div
    class="border border-slate-700 px-4 py-2 rounded-md max-w-sm w-full mx-auto mb-8 text-slate-300 shadow-md"
    v-click-outside="submitForm"
  >
    <span v-if="!show" class="flex exceptItem" @click="showNewNote">
      Take a note ...
    </span>
    <form v-else>
      <input
        type="text"
        placeholder="Title"
        v-model="list[0].title"
        class="custom-input mb-2 border-b border-slate-500"
      />

      <div
        type="text"
        placeholder="Take a note ..."
        class="custom-input"
        ref="input"
        v-on:keyup.enter="onEnter"
      >
        <nested-draggable :tasks="list" />
      </div>

      <div class="flex justify-end">
        <input
          type="button"
          value="submit"
          class="cursor-pointer"
          @click="submitForm"
        />
      </div>
    </form>
  </div>
</template>
<script>
import Vue from "vue";

import nestedDraggable from "@/components/nested.vue";
export default {
  data() {
    return {
      show: false,
      title: "",
      drag: false,
      list: [
        {
          label: "",
          title: "",
          checked: false,
          tasks: [],
        },
      ],
    };
  },
  components: {
    nestedDraggable,
  },
  methods: {
    async showNewNote() {
      this.show = true;
      Vue.nextTick(() => {
        this.$refs.input.lastChild.lastChild.lastChild.children[0].lastChild.focus();
      });
    },
    submitForm() {
      if (this.list[this.list.length - 1].label == "" && this.list.length < 2) {
        this.show = false;
        return;
      }

      this.$store.dispatch("addNote", this.list);
      this.list = [
        {
          label: "",
          checked: false,
          tasks: [],
        },
      ];

      this.title = "";
      this.show = false;
    },

    onEnter() {
      this.list.push({
        title: "",
        checked: false,
        tasks: [],
      });

      Vue.nextTick(() => {
        this.$refs.input.lastChild.lastChild.lastChild.children[0].lastChild.focus();
      });
    },
  },
};
</script>
<style lang="scss">
.custom-input {
  @apply bg-transparent focus:bg-transparent  w-full  focus:shadow-none focus:outline-none resize-none py-1;
}
</style>
