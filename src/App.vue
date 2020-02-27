<template>
  <div>
    <div class="polygon"></div>
    <div id="app" class="relative p-8 flex justify-between flex-col md:flex-row">
      <PostList/>
      <ActionList/>
    </div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import ActionList from '@/components/ActionList.vue';

export default {
  name: 'app',
  components: {
    PostList,
    ActionList,
  }
}
</script>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .polygon {
    @apply fixed w-full h-48 bg-purple;
  }

  @screen xs {
    .polygon {
      clip-path: polygon(0 0, 0% 100%, 100% 0);
    }
  }

  .heading {
    @apply text-lg font-semibold
  }

  .card {
    @apply relative rounded bg-white shadow-md
  }

</style>
