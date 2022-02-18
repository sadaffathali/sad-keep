<template>
  <draggable v-model="array">
    <transition-group>
      <div
        class="flex items-center"
        v-for="(note, index) in array"
        :key="index"
      >
        <input
          type="checkbox"
          class="checkbox"
          v-model="note.checked"
          @change="$emit('checked', { index, checked: $event.target.value })"
          :disabled="!isEditable"
        />
        <input
          rows="1"
          class="custom-input"
          :value="note.title"
          @input="$emit('input', { index, title: $event.target.value })"
          :disabled="!isEditable"
          :class="{
            'line-through	 text-slate-500': note.checked,
          }"
        />
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: ["data", "isEditable"],
  components: {
    draggable,
  },
  data() {
    return {
      array: this.data,
    };
  },
};
</script>
