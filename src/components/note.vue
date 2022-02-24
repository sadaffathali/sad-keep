<template>
  <div
    class="flex flex-col items-start border border-slate-700 pr-4 pt-2 pb-6 rounded-md shadow shadow-slate-500/40 leading-6 relative h-fit cursor-pointer"
    @click="$emit('click')"
  >
    <span>
      {{ notes.title }}
    </span>

    <nested-draggable :editable="isEditable" :tasks="notes" />

    <div class="flex justify-end w-full" v-if="isEditable">
      <input
        type="button"
        :value="isEditable ? 'Save' : 'Edit'"
        class="cursor-pointer"
        @click="submitForm"
      />
    </div>
  </div>
</template>
<script>
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
    nestedDraggable,
  },
  methods: {
    closeDropdown() {
      this.dropdown = false;
    },
    submitForm() {
      // console.log("hi");
    },
  },
};
</script>
