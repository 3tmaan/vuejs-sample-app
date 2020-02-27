<template>
  <div class="flex justify-between items-center">
    <p class="pr-2 text-sm">{{action.message}}</p>
    <button class="btn" type="button" @click="undo(index)">Time travel</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Action',
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["actions"]),
    action() {
      return this.actions[this.index]
    }
  },
  methods: {
    undo(index) {
      const { prevPosts } = this.action;
      this.$store.commit('UNDO_ACTION', {prevPosts, index});
    },
  },
}
</script>

<style scoped>
  .btn {
    @apply py-2 px-4 bg-green rounded outline-none text-sm text-darkgray font-semibold
  }
</style>