import React from 'react';
import {View} from 'react-native';
import {usePosts} from '../../realm/queries/usePosts';

const Posts = () => {
    const posts = usePosts(0);
  console.log(posts);

  return <View></View>;
};

export default Posts;
