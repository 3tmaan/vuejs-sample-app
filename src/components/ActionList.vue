<template>
  <aside class="aside w-full md:w-6/12">
    <div class="bg-white px-4 py-3">
      <h1 class="heading text-darkgray">
        List of actions commited
      </h1>
    </div>
    <p v-if="actions.length === 0" ref="noData" class="p-4">No action committed yet</p>
    <div v-else class="card m-4 border">
      <transition-group name="bounce" tag="div">
        <div class="action-card" :class="['p-2', actionIndex === 0 ? 'border-t-0' : 'border-t']"
          v-for="(action, actionIndex) in actions"
          :key="action.timestamp">
            <Action :index="actionIndex" />
        </div>
      </transition-group>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex';
import Action from '@/components/Action.vue';

export default {
  name: 'ActionList',
  components: {
    Action
  },
  computed: {
    ...mapGetters(["actions"]),
  },
}
</script>

<style scoped>
  .aside {
    @apply relative self-start rounded overflow-hidden shadow-md bg-lightgray
  }
  .bounce-enter-active {
    animation: bounce-in .5s ease-in-out;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>