/* eslint-disable react-hooks/exhaustive-deps */
import Realm from 'realm';
import {useQuery, useRealm} from '@realm/react';
import PostSchema from '../../schemas/PostSchema';
import {realmQueries} from '../../../utils/Constants';
import {PostsType} from '../../../services/PostsService/types/PostsService.type';
import {PostsService} from '../../../services/PostsService/PostsService';
import {useEffect} from 'react';

export const usePosts = (page: number) => {
  const posts = useQuery(PostSchema);
  const realm = useRealm();
  const savePosts = (myPosts: PostsType[]) => {
    realm.write(() => {
      myPosts.forEach(post => {
        realm.create(realmQueries.posts, post, Realm.UpdateMode.Modified);
      });
    });
  };
  const fetchData = async () => {
    try {
      const postsData = await PostsService.getPosts(page);
      savePosts(postsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return posts;
};
