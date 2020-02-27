import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import Action from '@/components/Action.vue';
import mockedActions from '../../../fixtures/actions';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Action.vue', () => {
    let store;
    let mutations;
    let getters;
    let options;

    beforeEach(() => {
        mutations =  {
            UNDO_ACTION: jest.fn(),
        }
        getters = {
            actions: () => mockedActions
        }
        store = new Vuex.Store({
            mutations,
            getters
        })
        options = {
            store,
            localVue,
            propsData: { index: 0 }
        }
    });

    it('renders correctly', () => {
        const wrapper = shallowMount(Action, options);

        expect(wrapper).toMatchSnapshot();
    });

    it('calls store mutations method "UNDO_ACTION" when button is clicked', () => {
        const wrapper = shallowMount(Action, options);
        const button = wrapper.find('button');

        button.trigger('click');
        expect(mutations.UNDO_ACTION).toHaveBeenCalled();
    });
});
