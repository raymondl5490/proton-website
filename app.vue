<template>
  <div id="app" class="message">
    <h1 class="hoverable">Hello World</h1>
    <p class="text-sm">If this message is centered, Nuxt 3 with TailwindCSS is set up correctly.</p>
  </div>
</template>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #app {
    @apply h-screen text-black;
    @apply dark:bg-slate-900 dark:text-gray-300;
  }

  .message {
    @apply flex flex-col justify-center items-center;
    h1 {
      @apply text-4xl mb-4;
    }
    .hoverable {
      @apply transition-colors ease-in-out hover:text-blue-600;
      @apply dark:hover:text-yellow-300;
    }
  }
</style>