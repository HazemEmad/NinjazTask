import {realmQueries} from '../../utils/Constants';
import {Realm} from '@realm/react';

export class PostSchema extends Realm.Object<PostSchema> {
  id!: string;
  image?: string;
  likes?: number;
  tags?: string[];
  text?: string;
  publishDate?: string;
  owner?: Owner;

  static schema: Realm.ObjectSchema = {
    name: realmQueries.posts,
    primaryKey: 'id',
    properties: {
      id: 'string',
      image: 'string?',
      likes: 'int?',
      tags: 'string?[]',
      text: 'string?',
      publishDate: 'string?',
      owner: 'Owner?',
    },
  };
}
export class Owner extends Realm.Object<Owner> {
  id!: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  static schema: Realm.ObjectSchema = {
    name: 'Owner',
    properties: {
      id: 'string',
      title: 'string?',
      firstName: 'string?',
      lastName: 'string?',
      picture: 'string?',
    },
  };
}
