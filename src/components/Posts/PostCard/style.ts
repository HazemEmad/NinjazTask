import {StyleSheet} from 'react-native';
import {pxH, pxW} from '../../../utils/Layouts';

export const style = StyleSheet.create({
  container: {
    padding: pxW(15),
    backgroundColor: '#fff',
    borderRadius: pxW(20),
    marginBottom: pxH(10),
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: pxH(20),
  },
  userImage: {
    height: pxW(50),
    width: pxW(50),
    borderRadius: pxW(50 / 2),
  },
  userName: {
    justifyContent: 'space-between',
    marginStart: pxW(15),
  },
  postImage: {
    height: pxW(200),
    width: '35%',
    resizeMode: 'stretch',
  },
  details: {
    justifyContent: 'center',
    marginStart: pxW(15),
    width: '60%',
  },
  tagsContainer: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tags: {
    padding: pxW(5),
    borderRadius: pxW(5),
    backgroundColor: '#DA2877',
    marginEnd: pxW(5),
    marginBottom: pxH(5),
  },
  desc: {
    marginTop: pxH(5),
    marginBottom: pxH(10),
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    color: '#3B4CAD',
    marginStart: pxW(10),
  },
});
