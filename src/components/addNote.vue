<template>
  <div
    class="border border-slate-700 px-4 py-2 rounded-md max-w-sm w-full mx-auto mb-8 text-slate-300 shadow-md"
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
        <nested-draggable :tasks="list" :editable="true" />
      </div>

      <div class="flex justify-between mt-4">
        <input
          type="button"
          v-if="editable"
          value="Delete"
          class="cursor-pointer"
          @click="removeNote"
        />
        <input
          type="button"
          :value="!editable ? 'Submit' : 'Update'"
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
  props: {
    note: {
      required: false,
      type: Array,
    },
    editable: {
      required: false,
      type: Boolean,
      default: false,
    },
    id: {
      required: false,
      type: Number,
    },
    CloseAndSubmit: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.editable ? true : false,
      title: "",
      drag: false,
      list: this.note
        ? this.note
        : [
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
        this.focusOnInput();
      });
    },
    submitForm() {
      if (this.list[this.list.length - 1].label == "" && this.list.length < 2) {
        this.show = false;
        return;
      }

      if (this.id != undefined) {
        let payload = {
          id: this.id,
          note: this.list,
        };
        this.$store.dispatch("updateNote", payload);

        this.$emit("updated", true);
      } else {
        this.$store.dispatch("addNote", this.list);
      }

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
        this.focusOnInput();
      });
    },

    focusOnInput() {
      this.$refs.input.lastChild.lastChild.lastChild.children[0].children[1].focus();
    },
    removeNote() {
      this.$store.dispatch("removeNote", this.id);
    },
  },
};
</script>
