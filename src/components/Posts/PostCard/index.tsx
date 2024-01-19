import React, {FC, memo} from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './style';
import {PostsType} from '../../../services/PostsService/types/PostsService.type';

const PostCard: FC<PostsType> = ({
  id,
  image,
  likes,
  owner,
  publishDate,
  tags,
  text,
}) => {
  return (
    <View style={style.container} key={id}>
      <View style={style.rowContainer}>
        <Image source={{uri: owner?.picture}} style={style.userImage} />
        <View style={style.userName}>
          <Text>
            {owner?.title + '/ ' + owner?.firstName + ' ' + owner?.lastName}
          </Text>
          <Text>{publishDate}</Text>
        </View>
      </View>
      <View style={style.rowContainer}>
        <Image source={{uri: image}} style={style.postImage} />
        <View style={style.details}>
          <Text>{publishDate}</Text>
          <Text style={style.desc}>{text}</Text>
          <View style={[style.rowContainer, style.tagsContainer]}>
            {tags?.map(item => (
              <View style={style.tags} key={item}>
                <Text>{item}</Text>
              </View>
            ))}
          </View>
          <View style={style.likes}>
            <Text>Likes#:</Text>
            <Text style={style.likeText}>{likes}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(PostCard);
