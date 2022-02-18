<template>
  <section id="404" class="h-screen flex items-center justify-center flex-col">
    <div class="">404</div>
    <router-link to="/" class="capitalize"> back to Sad-Notes! </router-link>
  </section>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Mono:400");
div {
  animation: glitch 1s linear infinite;
  font-size: 96px;
  letter-spacing: -7px;
  text-align: center;
  font-family: "Fira Mono", monospace;
}

@keyframes glitch {
  2%,
  64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%,
  60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

div:before,
div:after {
  content: attr(title);
  position: absolute;
  left: 0;
}

div:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,
  64% {
    transform: translate(2px, -2px);
  }
  4%,
  60% {
    transform: translate(-2px, 2px);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg);
  }
}

div:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {
  2%,
  64% {
    transform: translate(-2px, 0);
  }
  4%,
  60% {
    transform: translate(-2px, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg);
  }
}
</style>
