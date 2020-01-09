import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { FlushThunks } from 'redux-testkit';

import * as reducers from '../reducers';
import * as uut from '../posts/actions';
import * as postsSelectors from '../posts/reducer';
import redditService from '../../services/reddit';
jest.mock('../../services/reddit');

describe('posts store integration', () => {

  let flushThunks, store;

  beforeEach(() => {
    jest.resetAllMocks();
    // create a redux store with flushThunks added as the first middleware
    flushThunks = FlushThunks.createMiddleware();
    store = createStore(combineReducers(reducers), applyMiddleware(flushThunks, thunk));
  });

  it('should select posts', () => {
    expect(postsSelectors.getSelectedPost(store.getState())).toEqual([]);
    store.dispatch(uut.selectPost('post1'));
    expect(postsSelectors.getSelectedPost(store.getState())).toEqual(['post1']);
    store.dispatch(uut.selectPost('post2'));
    expect(postsSelectors.getSelectedPost(store.getState())).toEqual(['post1', 'post2']);
  });

  it('should fetch posts from server', async () => {
    redditService.getPostsBySubreddit.mockReturnValueOnce(['post1', 'post2']);
    expect(postsSelectors.getPostsLoading(store.getState())).toBe(false);
    expect(postsSelectors.getPosts(store.getState())).toEqual([]);
    await store.dispatch(uut.fetchPosts());
    expect(postsSelectors.getPostsLoading(store.getState())).toBe(false);
    expect(postsSelectors.getPosts(store.getState())).toEqual(['post1', 'post2']);
  });

  it('should test a thunk that dispatches another thunk', async () => {
    expect(postsSelectors.isForeground(store.getState())).toBe(false);
    await store.dispatch(uut.initApp()); // this dispathces thunk appOnForeground
    await flushThunks.flush(); // wait until all async thunks resolve
    expect(postsSelectors.isForeground(store.getState())).toBe(true);
  });

});