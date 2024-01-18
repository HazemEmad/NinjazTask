import {HTTP} from '..';
import {PostsType} from './types/PostsService.type';

export const PostsService = {
  getPosts: (page: number = 0) =>
    HTTP.get<{data: PostsType[]}>(`post?page=${page}&limit=10`).then(
      res => res.data?.data,
    ),
};
