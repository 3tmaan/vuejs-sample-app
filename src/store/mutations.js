export default {
  /**
   * Set state's posts array with the give posts data
   * @param {object} state
   * @param {object} posts
   */
  SAVE_POSTS(state, posts) {
    state.posts = posts;
  },

  /**
   * Change the post's order by moving it one position 'up'
   * @param {object} state
   * @param {number} payload.index
   */
  MOVE_UP(state, {index}) {
    const newIndex = index - 1;
    const prevPosts = [...state.posts];
    const currentPost = prevPosts[index];
    const prevPost = prevPosts[newIndex];

    this.commit('ADD_ACTION', {index, newIndex});
    // Apply the order change
    state.posts.splice(newIndex, 2, currentPost, prevPost);
  },

  /**
   * Change the post's order by moving it one position 'down'
   * @param {object} state
   * @param {number} payload.index
   */
  MOVE_DOWN(state, {index}) {
    const newIndex = index + 1;
    const prevPosts = [...state.posts];
    const currentPost = prevPosts[index];
    const nextPost = prevPosts[newIndex];

    this.commit('ADD_ACTION', {index, newIndex});
    // Apply the order change
    state.posts.splice(index, 2, nextPost, currentPost);
  },

  /**
   * Store the action's history and add it to the state's actions array
   * @param {object} state
   * @param {number} payload.index
   * @param {number} payload.newIndex
   */
  ADD_ACTION(state, {index, newIndex}) {
    const prevPosts = [...state.posts]; // Store the current posts's order before applying the change
    const currentPost = prevPosts[index];

    // Add the new committed action to the top of the array
    state.actions.unshift({
      prevPosts,
      timestamp: new Date().getTime(), // used as a unique key to loop through it
      message: `Moved post ${currentPost.id} from index ${index} to index ${newIndex}`,
    });
  },

  /**
   * Remove the action and undo the
   * state's posts to the previous data
   * @param {object} state
   * @param {object} posts
   */
  UNDO_ACTION(state, {prevPosts, index}) {
    state.actions.splice(0, index + 1);
    state.posts = prevPosts;
  },
}
