import React, {FC, memo, useCallback} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {PostsType} from '../../../services/PostsService/types/PostsService.type';
import Empty from '../../common/Empty';
import Loader from '../../common/Loader';
import PostCard from '../PostCard';
import {PostsListType} from './PostsList.type';

const PostsList: FC<PostsListType> = ({
  posts,
  loading,
  setPage,
  page,
  refreshData,
}) => {
  const keyExtractor = useCallback((item: PostsType) => item?.id, []);

  const renderItems = useCallback(
    ({item}: {item: PostsType; index: number}) => (
      <PostCard key={item?.id} {...item} />
    ),
    [],
  );

  const onEndReached = useCallback(
    () => !loading && setPage(page + 1),
    [loading, page, setPage],
  );

  return (
    <FlatList
      testID="postsList"
      data={posts}
      keyExtractor={keyExtractor}
      renderItem={renderItems}
      onEndReached={onEndReached}
      ListEmptyComponent={<Empty loading={loading} />}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refreshData} />
      }
      ListFooterComponent={<Loader loading={loading} />}
    />
  );
};

export default memo(PostsList);
