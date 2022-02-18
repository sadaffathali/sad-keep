<template>
  <div>
    <div v-if="editable" class="pl-4 mb-2 font-semibold">
      {{ tasks.length > 0 ? tasks[0].title : "" }}
    </div>
    <draggable
      class="dragArea"
      tag="ul"
      :list="tasks"
      :group="{ name: 'g1' }"
      :disabled="editable"
    >
      <li v-for="(el, index) in tasks" :key="index" class="pl-4">
        <div class="flex items-center relative">
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
            @keyup.delete="triggerDBKeyUp($event, index)"
            :class="{
              'line-through	 text-slate-500': el.checked,
              'cursor-default': !editable,
            }"
          />
          <span
            v-if="!editable"
            class="absolute right-2 top-1 cursor-pointer text-slate-400 hover:text-slate-200 exceptItem"
            @click="removeTask(index)"
          >
            x
          </span>
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
  methods: {
    removeTask(i) {
      this.tasks.splice(i, 1);
      if (this.tasks.length == 0) {
        this.tasks.push({
          label: "",
          title: "",
          checked: false,
          tasks: [],
        });
      }
    },
    triggerDBKeyUp(event, index) {
      if (event.target.value.trim() == "") {
        this.removeTask(index);
      }
    },
  },
};
</script>
