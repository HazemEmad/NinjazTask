import React from 'react';
import {render} from '@testing-library/react-native';
import PostCard from '../src/components/Posts/PostCard';

describe('ComingSoon component', () => {
  afterAll(() => {
    jest.useRealTimers();
  });
  it('renders correctly', () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-01-20'));
    const data = {
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
    };
    const {getByText} = render(<PostCard {...data} />);

    const NameElement = getByText('ms/ Sara Andersen');
    expect(NameElement).toBeDefined();

    const likeElement = getByText('43');
    expect(likeElement).toBeDefined();

    const dateElement = getByText('4 years ago');
    expect(dateElement).toBeDefined();

    const tagsElement = getByText('golden retriever');
    expect(tagsElement).toBeDefined();
  });
});
