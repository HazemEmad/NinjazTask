import {PostSchema} from '../../../realm/schemas/PostSchema';

export type PostsListType = {
  posts: Realm.Results<PostSchema>;
  loading: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  refreshData: () => void;
};
