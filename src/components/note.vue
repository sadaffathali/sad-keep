<template>
  <div
    class="flex flex-col items-start border border-slate-700 pr-4 pt-2 pb-6 rounded-md shadow shadow-slate-500/40 leading-6 relative h-fit"
    @click="$emit('click')"
    v-click-outside="submitForm"
  >
    <span>
      {{ notes.title }}
    </span>

    <nested-draggable :editable="true" :tasks="notes" />

    <div class="flex justify-end w-full" v-if="isEditable">
      <input
        type="button"
        value="submit"
        class="cursor-pointer"
        @click="submitForm"
      />
    </div>
    <NoteOptions
      v-click-outside="closeDropdown"
      @isDropdown="dropdown = true"
      @removeNote="removeNote"
      :dropdown="dropdown"
      :editable="isEditable"
    />
  </div>
</template>
<script>
import NoteOptions from "@/components/NoteOptions.vue";
import nestedDraggable from "@/components/nested.vue";
export default {
  props: ["notes", "isEditable", "index"],
  data() {
    return {
      dropdown: false,
      editable: false,
    };
  },
  components: {
    NoteOptions,
    nestedDraggable,
  },
  methods: {
    removeNote() {
      this.$store.dispatch("removeNote", this.index);
      this.closeDropdown();
    },
    closeDropdown() {
      this.dropdown = false;
    },
    submitForm() {
      console.log("hi");
    },
  },
};
</script>
