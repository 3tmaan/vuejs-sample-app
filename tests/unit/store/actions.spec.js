import axios from 'axios';
import actions from '@/store/actions';
import mockedPosts from '../../../fixtures/posts';

jest.mock('axios');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('action.fetchPosts', () => {
    it('fetches successfully the result from "jsonplaceholder" api', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: mockedPosts })
        )
        const mockCommit = { commit: jest.fn() };
        const result = await actions.fetchPosts(mockCommit);

        expect(axios.get).toBeCalledWith('https://jsonplaceholder.typicode.com/posts?_limit=5');
        expect(result.data.length).toBe(5);
    });

    it('throws an error when the promise is rejected', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.reject('error')
        )
        const mockCommit = { commit: jest.fn() };

        await expect(actions.fetchPosts(mockCommit)).rejects.toThrowError('API error');
    });
});
