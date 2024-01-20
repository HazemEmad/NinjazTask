import React, {FC, memo} from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './style';
import {PostsType} from '../../../services/PostsService/types/PostsService.type';
import TimeAgo from 'react-native-timeago';
import moment from 'moment';

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
    <View style={style.container} key={id} testID={id}>
      <View style={style.rowContainer}>
        <Image source={{uri: owner?.picture}} style={style.userImage} />
        <View style={style.userName}>
          <Text>
            {owner?.title + '/ ' + owner?.firstName + ' ' + owner?.lastName}
          </Text>
          <Text>
            {publishDate
              ? moment(publishDate).format('hh:mm A . MMM DD, YYYY')
              : ''}
          </Text>
        </View>
      </View>
      <View style={style.rowContainer}>
        <Image source={{uri: image}} style={style.postImage} />
        <View style={style.details}>
          <TimeAgo time={publishDate ?? ''} />
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

export default memo(PostCard, (prevProps, nextProps) => {
  return prevProps?.id === nextProps?.id;
});
