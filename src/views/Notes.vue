<template>
  <div class="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 grow">
    <Note
      @click="showNote(index)"
      v-for="(note, index) in notes"
      :key="index"
      :notes="note"
      :index="index"
    />
    <div
      v-if="show"
      class="fixed w-full h-full top-0 right-0 bg-gray-900 bg-opacity-95 m-0 z-50 pt-14 px-4"
      style="margin-top: 0"
    >
      <div class="container mx-auto flex items-start justify-center h-full">
        <EditNote
          :note="selectedNote"
          :id="selectedId"
          :editable="true"
          @updated="show = !$event"
          v-click-outside="closeNote"
        />
      </div>
    </div>
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
import EditNote from "@/components/addNote.vue";
import EmptyIcon from "@/components/icons/emptyIcon.vue";

export default {
  components: {
    Note,
    EmptyIcon,
    EditNote,
  },
  computed: {
    ...mapGetters(["notes"]),
  },
  data() {
    return {
      selectedNote: [],
      show: false,
      selectedId: "",
      counter: 0,
      CloseAndSubmit: false,
    };
  },
  methods: {
    showNote(id) {
      this.selectedNote = this.notes[id];
      this.show = true;
      this.selectedId = id;
    },
    clickOutside() {
      this.show = false;
    },
    closeNote() {
      this.counter++;
      if (this.counter > 1) {
        this.clickOutside();
        this.CloseAndSubmit = true;
        this.counter = 0;
      }
    },
  },
};
</script>
