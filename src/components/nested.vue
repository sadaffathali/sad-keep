<template>
  <div>
    <div v-if="editable" class="pl-4 mb-2 font-semibold">
      {{ tasks[0] != undefined ? tasks[0].title : "" }}
    </div>
    <draggable
      class="dragArea"
      tag="ul"
      :list="tasks"
      :group="{ name: 'g1' }"
      :disabled="editable"
    >
      <li v-for="(el, index) in tasks" :key="index" class="pl-4">
        <div class="flex items-center">
          <input
            type="checkbox"
            class="checkbox cursor-move"
            v-model="el.checked"
            :disabled="editable"
            :class="{
              'cursor-default': editable,
            }"
          />
          <input
            rows="1"
            class="custom-input"
            v-model="el.label"
            :disabled="editable"
            :class="{
              'line-through	 text-slate-500': el.checked,
              'cursor-default': !editable,
            }"
          />
        </div>
        <nested-draggable :tasks="el.tasks" />
      </li>
    </draggable>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  props: {
    tasks: {
      required: true,
      type: Array,
    },
    editable: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
  components: {
    draggable,
  },
  name: "nested-draggable",
};
</script>
<style lang="scss">
.custom-input {
  @apply bg-transparent focus:bg-transparent  w-full  focus:shadow-none focus:outline-none resize-none py-1;
}
</style>
