<template>
  <div
    class="container mx-auto flex flex-col md:flex-row md:space-y-0 md:space-x-4 space-y-8 grow"
  >
    <Note
      @click="showNote(index)"
      v-for="(note, index) in notes"
      :key="index"
      :notes="note"
      :index="index"
    />
    <!-- <div
      v-if="show"
      class="fixed w-full h-full top-0 right-0 bg-gray-900 bg-opacity-95 m-0 z-50 pt-14 px-4"
      style="margin-top: 0"
    >
      <div class="container mx-auto flex items-start justify-center h-full">
        <Note
          :notes="selectedNote"
          :isEditable="true"
          class="max-w-sm w-full"
        />
      </div>
    </div> -->
    <div
      v-if="notes.length == 0"
      class="col-span-full flex items-center justify-center"
    >
      <EmptyIcon />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Note from "@/components/note.vue";
import EmptyIcon from "@/components/icons/emptyIcon.vue";

export default {
  components: {
    Note,
    EmptyIcon,
  },
  computed: {
    ...mapGetters(["notes"]),
  },
  data() {
    return {
      selectedNote: [],
      show: false,
    };
  },
  methods: {
    showNote(id) {
      this.selectedNote = this.notes[id];
      this.show = true;
    },
    clickOutside() {
      this.show = false;
    },
  },
};
</script>
