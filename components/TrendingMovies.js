import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ListItems from './ListItems';

export default function TrendingMovies() {
  return (
    <View>
      <ListItems />
    </View>
  );
}
