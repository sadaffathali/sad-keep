<template>
  <div
    class="absolute right-3"
    style="bottom: -15px"
    title="More"
    @click="$emit('isDropdown')"
  >
    <MenuIcon />
    <div
      class="absolute text-sm whitespace-nowrap bg-slate-800 shadow-lg shadow-indigo-500/40 right-3 z-50"
      v-if="dropdown"
    >
      <ul>
        <li
          class="hover:bg-slate-900 p-2 cursor-pointer"
          @click="$emit('removeNote')"
        >
          Delete Note
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import MenuIcon from "@/components/icons/menuIcon.vue";
export default {
  components: {
    MenuIcon,
  },

  props: {
    dropdown: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
