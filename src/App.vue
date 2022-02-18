<template>
  <div
    id="app"
    class="min-h-screen bg-slate-900 py-4 text-slate-200 flex flex-col px-4 md:px-0"
  >
    <AddNote />
    <router-view />
  </div>
</template>
<script>
import AddNote from "@/components/addNote.vue";

export default {
  components: {
    AddNote,
  },
  methods: {
    safe_get(key) {
      if (localStorage.hasOwnProperty(key)) {
        return JSON.parse(localStorage.getItem(key));
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getNotes", this.safe_get("notes"));
  },
};
</script>
<style lang="scss">
$baseFontSize: 16;

$green: #009688;
$blue: #5677fc;
$blueDark: #3b50ce;

$slideDistance: 100;
$slideDuration: 0.4s;

.checkbox {
  position: relative;
  top: rem(-6);
  margin: -5px 1rem 0 0;
  cursor: pointer;
  z-index: 9;

  &:before {
    transition: all 0.3s ease-in-out;
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    z-index: 1;
    width: 1rem;
    height: 1rem;
    border: 2px solid #f2f2f2;
  }

  &:checked {
    &:before {
      transform: rotate(-45deg);
      height: 0.5rem;
      border-color: $green;
      border-top-style: none;
      border-right-style: none;
    }
  }

  &:after {
    content: "";

    position: absolute;
    top: 1px;
    left: 0;
    width: 17px;
    height: 17px;

    background: #fff;

    cursor: pointer;
  }
}

%slide-up {
  -webkit-animation-duration: $slideDuration;
  animation-duration: $slideDuration;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: slideUp;
  animation-name: slideUp;
  -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@-webkit-keyframes slideUp {
  0% {
    -webkit-transform: translateY(rem($slideDistance));
    transform: translateY(rem($slideDistance));
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slideUp {
  0% {
    -webkit-transform: translateY(rem($slideDistance));
    transform: translateY(rem($slideDistance));
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
