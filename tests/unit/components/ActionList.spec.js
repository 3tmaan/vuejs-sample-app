import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import ActionList from '@/components/ActionList.vue';
import mockedActions from '../../../fixtures/actions';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ActionList.vue', () => {
    let store;
    let getters;
    let options;

    beforeEach(() => {
        getters = {
            actions: () => mockedActions
        }
        store = new Vuex.Store({
            getters
        })
        options = {
            store,
            localVue,
        }
    });

    it('renders 1 child action', () => {
        const wrapper = shallowMount(ActionList, options);

        expect(wrapper.vm.$el.querySelectorAll('.action-card').length).toBe(1);
    });

    it('displays "No action committed yet" when actions list is empty', () => {
        const getters = {
            actions: () => []
        }
        store = {
            ...store,
            getters
        };
        options.store = store;

        const wrapper = shallowMount(ActionList, options);
        const noData = wrapper.find({ ref: 'noData' });

        expect(noData.text()).not.toBe(null);
        expect(noData.text()).toBe('No action committed yet');
    });
});
