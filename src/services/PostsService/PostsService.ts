import {HTTP} from '..';
import {limitOfItems} from '../../utils/Constants';
import {PostsResponse} from './types/PostsService.type';

export const PostsService = {
  getPosts: (page: number = 0) =>
    HTTP.get<PostsResponse>(`post?page=${page}&limit=${limitOfItems}`).then(
      res => res.data,
    ),
};
