import React, {memo} from 'react';
import PostsList from '../../components/Posts/PostsList';
import {usePosts} from '../../realm/queries/usePosts';

const Posts = () => {
  const usePost = usePosts();
  return <PostsList {...usePost} />;
};

export default memo(Posts);
