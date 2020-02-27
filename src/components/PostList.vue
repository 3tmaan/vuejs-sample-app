<template>
  <section class="relative w-full mb-4 md:w-5/12">
    <h1 class="heading text-white">Sortable Post List</h1>
    <h3 v-if="posts.length === 0" ref="noData" class="absolute pt-6 text-white text-xs">Fetching posts...</h3>
    <transition-group name="flip-list" class="mt-6" tag="div">
      <div class="post-card" v-for="(post, postIndex) in posts"
        :key="post.id">
          <Post :index="postIndex" />
      </div>
    </transition-group>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from '@/components/Post.vue';

export default {
  name: 'PostList',
  components: {
    Post
  },
  computed: {
    ...mapGetters(["posts"])
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  }
}
</script>

<style>
  .flip-list-move {
    transition: transform 0.5s;
  }
</style>