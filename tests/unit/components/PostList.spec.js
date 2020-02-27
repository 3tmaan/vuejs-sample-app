import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import PostList from '@/components/PostList.vue';
import mockedPosts from '../../../fixtures/posts';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('PostList.vue', () => {
    let store;
    let actions;
    let getters;
    let options;

    beforeEach(() => {
        actions = {
            fetchPosts: jest.fn(),
        }
        getters = {
            posts: () => mockedPosts
        }
        store = new Vuex.Store({
            actions,
            getters
        })
        options = {
            store,
            localVue,
        }
    });

    it('calls store action "fetchPosts" when mounted', () => {
        shallowMount(PostList, options);

        expect(actions.fetchPosts).toHaveBeenCalled();
    });

    it('renders 5 children posts', () => {
        const wrapper = shallowMount(PostList, options);

        expect(wrapper.vm.$el.querySelectorAll('.post-card').length).toBe(5);
    });

    it('displays "Fetching posts..." while featching posts', () => {
        const getters = {
            posts: () => []
        }
        store = {
            ...store,
            getters
        };
        options.store = store;

        const wrapper = shallowMount(PostList, options);
        const noData = wrapper.find({ ref: 'noData' });

        expect(noData.text()).not.toBe(null);
        expect(noData.text()).toBe('Fetching posts...');
    });
})
