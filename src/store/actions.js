import axios from 'axios';

export default {
  async fetchPosts({commit}) {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');

      commit('SAVE_POSTS', result.data);

      return result;
    } catch (error) {
        throw new Error(`API ${error}`);
    }
  },
}
