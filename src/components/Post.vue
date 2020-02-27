<template>
  <div class="card pl-3 pr-8 py-4 mb-4">
    <h3 class="text-base">Post {{ post.id }}</h3>
    <p class="text-xs mt-2 mr-8">{{ post.title }}</p>
    <div class="absolute right-0 top-0 mr-2 h-full flex flex-col justify-center">
      <button class="btn" ref="buttonUp" type="button" @click="moveUp(index)" v-if="index !== 0">
        <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
      </button>
      <button class="btn" ref="buttonDown" type="button" @click="moveDown(index)" v-if="index !== posts.length-1">
        <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Post',
  props: {
    index: {
      type: Number,
      required: true,
    }
  },
  computed: {
    ...mapGetters(["posts"]),
    post() {
      return this.posts[this.index]
    }
  },
  methods: {
    moveUp(index) {
      this.$store.commit('MOVE_UP', {index});
    },
    moveDown(index) {
      this.$store.commit('MOVE_DOWN', {index});
    }
  }
}
</script>

<style scoped>
  .btn {
    @apply p-1 my-3 outline-none
  }
</style>