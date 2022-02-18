<template>
  <div
    id="app"
    class="min-h-screen bg-slate-900 py-4 text-slate-200 flex flex-col px-4 md:px-0"
  >
    <AddNote v-if="currentRoutePath == '/'" />
    <router-view />
  </div>
</template>
<script>
import AddNote from "@/components/addNote.vue";
import { safe_get } from "@/configs/storage";
export default {
  components: {
    AddNote,
  },
  mounted() {
    this.$store.dispatch("getNotes", safe_get("notes"));
  },
  computed: {
    currentRoutePath() {
      return this.$route.path;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/index.scss";
</style>
