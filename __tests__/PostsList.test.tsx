import React from 'react';
import {render} from '@testing-library/react-native';
import PostsList from '../src/components/Posts/PostsList';
import {PostSchema} from '../src/realm/schemas/PostSchema';

const mockPosts = [
  {
    id: '60d21b4667d0d8992e610c85',
    image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
    likes: 43,
    owner: {
      firstName: 'Sara',
      id: '60d0fe4f5311236168a109ca',
      lastName: 'Andersen',
      picture: 'https://randomuser.me/api/portraits/women/58.jpg',
      title: 'ms',
    },
    publishDate: '2020-05-24T14:53:17.598Z',
    tags: ['animal', 'dog', 'golden retriever'],
    text: 'adult Labrador retriever',
  },
  {
    id: '60d21b4667d0d8992e610c22',
    image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
    likes: 43,
    owner: {
      firstName: 'Sara',
      id: '60d0fe4f5311236168a109ca',
      lastName: 'Andersen',
      picture: 'https://randomuser.me/api/portraits/women/58.jpg',
      title: 'ms',
    },
    publishDate: '2020-05-24T14:53:17.598Z',
    tags: ['animal', 'dog', 'golden retriever'],
    text: 'adult Labrador retriever',
  },
];

describe('PostsList component', () => {
  it('renders correctly with posts', () => {
    const {getByTestId} = render(
      <PostsList
        posts={mockPosts as unknown as Realm.Results<PostSchema>}
        loading={false}
        setPage={() => {}}
        page={1}
        refreshData={() => {}}
      />,
    );

    const flatList = getByTestId('postsList');
    expect(flatList).toBeDefined();

    mockPosts.forEach(post => {
      const postTitleElement = getByTestId(post.id);
      expect(postTitleElement).toBeDefined();
    });
  });

  it('renders correctly when loading', () => {
    const {getByTestId} = render(
      <PostsList
        posts={[] as unknown as Realm.Results<PostSchema>}
        loading={true}
        setPage={() => {}}
        page={1}
        refreshData={() => {}}
      />,
    );

    const loaderElement = getByTestId('loader');
    expect(loaderElement).toBeDefined();
  });
});
