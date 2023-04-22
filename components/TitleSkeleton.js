import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function TitleSkeleton() {
  return (
    <SkeletonPlaceholder backgroundColor='#444' highlightColor='#666'>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            marginTop: 6,
            width: 100,
            height: 20,
            borderRadius: 4,
            justifyContent: 'center',
            marginLeft: 5,
          }}
        />
      </View>
    </SkeletonPlaceholder>
  );
}
