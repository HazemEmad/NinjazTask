export type PostsType = {
  id: string;
  image?: string;
  likes?: number;
  tags?: string[];
  text?: string;
  publishDate?: string;
  owner?: {
    id: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    picture?: string;
  };
};
export type PostsResponse = {
  data: PostsType[];
  limit: number;
  page: number;
  total: number;
};
