import React, {memo, useCallback, useMemo} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, Text} from 'react-native';
import PostCard from '../../components/Posts/PostCard';
import {usePosts} from '../../realm/queries/usePosts';
import {PostsType} from '../../services/PostsService/types/PostsService.type';

const Posts = () => {
  const {posts, loading, setPage, page, refreshData} = usePosts();

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

  const EmptyComponent = useMemo(
    () => (!loading ? <Text>You Don't have any Posts</Text> : undefined),
    [loading],
  );
  const FooterComponent = useMemo(
    () => (loading ? <ActivityIndicator /> : undefined),
    [loading],
  );
  return (
    <FlatList
      data={posts}
      keyExtractor={keyExtractor}
      renderItem={renderItems}
      onEndReached={onEndReached}
      ListEmptyComponent={EmptyComponent}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refreshData} />
      }
      ListFooterComponent={FooterComponent}
    />
  );
};

export default memo(Posts);
