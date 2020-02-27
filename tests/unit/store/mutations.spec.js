import mutations from '@/store/mutations';
import mockedPosts from '../../../fixtures/posts';
import mockedActions from '../../../fixtures/actions';


describe('mutations.UNDO_ACTION', () => {
    const state = {
        posts: mockedPosts,
        actions: mockedActions
    }
    const payload = {
        index: 0,
        prevPosts: mockedActions[0].prevPosts,
    }

    mutations.UNDO_ACTION(state, payload);

    it('removes the action from the actions array', () => {
        expect(state.actions.length).toBe(0);
    })

    it('replaces the posts list with the one from the removed action', () => {
        expect(state.posts).toEqual(payload.prevPosts);
    })
});