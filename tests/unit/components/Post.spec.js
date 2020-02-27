import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import Post from '@/components/Post.vue';
import mockedPosts from '../../../fixtures/posts';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Post.vue', () => {
    let store;
    let mutations;
    let getters;
    let options;

    beforeEach(() => {
        mutations =  {
            MOVE_UP: jest.fn(),
            MOVE_DOWN: jest.fn(),
        }
        getters = {
            posts: () => mockedPosts
        }
        store = new Vuex.Store({
            mutations,
            getters
        })
        options = {
            store,
            localVue,
            propsData: { index: 1 }
        }
    });

    it('renders correctly', () => {
        const wrapper = shallowMount(Post, options);

        expect(wrapper).toMatchSnapshot();
    });

    it('calls store mutations method "MOVE_UP" when "up arrow" button is clicked', () => {
        const wrapper = shallowMount(Post, options);
        const buttonUp = wrapper.find({ ref: 'buttonUp' });

        buttonUp.trigger('click');
        expect(mutations.MOVE_UP).toHaveBeenCalled();
    });

    it('calls store mutations method "MOVE_DOWN" when "down arrow" button is clicked', () => {
        const wrapper = shallowMount(Post, options);
        const buttonDown = wrapper.find({ ref: 'buttonDown' });

        buttonDown.trigger('click');
        expect(mutations.MOVE_DOWN).toHaveBeenCalled();
    });
});
