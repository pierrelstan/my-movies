import React, { useEffect } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';

const Avatar = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const _avatarClicked = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const action = { type: 'SET_AVATAR', value: result.uri };
      dispatch(action);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => _avatarClicked()}
      >
        {props.avatar === 1 ? (
          <Image style={styles.avatar} source={props.avatar} />
        ) : (
          <Image style={styles.avatar} source={{ uri: props.avatar }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    margin: 5,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#9B9B9B',
    borderWidth: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    avatar: state.avatar.avatar,
  };
};

export default connect(mapStateToProps)(Avatar);
