/* eslint-disable react-hooks/exhaustive-deps */
import Realm from 'realm';
import {useQuery, useRealm} from '@realm/react';
import {limitOfItems, realmQueries} from '../../../utils/Constants';
import {PostsType} from '../../../services/PostsService/types/PostsService.type';
import {PostsService} from '../../../services/PostsService/PostsService';
import {useEffect, useState, useCallback} from 'react';
import {Alert} from 'react-native';
import {PostSchema} from '../../schemas/PostSchema';

export const usePosts = () => {
  const posts = useQuery(PostSchema);
  const [loading, setLoading] = useState(false);
  const [pageLimit, setPageLimit] = useState(0);
  const [page, setPage] = useState(
    posts?.length ? posts?.length / limitOfItems - 1 : posts?.length,
  );

  const realm = useRealm();
  const savePosts = useCallback(
    (myPosts: PostsType[]) => {
      realm.write(() => {
        myPosts.forEach(post => {
          realm.create(realmQueries.posts, post, Realm.UpdateMode.Modified);
        });
      });
    },
    [realm],
  );

  const fetchData = useCallback(async () => {
    if (pageLimit >= page) {
      try {
        setLoading(true);
        const postsData = await PostsService.getPosts(page);
        savePosts(postsData.data);
        if (pageLimit !== postsData.total) {
          setPageLimit(postsData.total);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching data:', error);
        Alert.alert('Error', `${error}`);
      }
    } else {
      if (pageLimit === 0) {
        setPageLimit(page + 1);
      }
    }
  }, [page, pageLimit, savePosts]);

  const refreshData = useCallback(() => {
    realm.write(() => {
      const allPosts = realm.objects(realmQueries.posts);
      realm.delete(allPosts);
    });
    setPage(0);
  }, [realm]);

  useEffect(() => {
    fetchData();
  }, [page]);

  return {posts, loading, page, setPage, refreshData};
};
