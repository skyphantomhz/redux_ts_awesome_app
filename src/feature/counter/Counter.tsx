import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { View, Text, Button } from 'react-native';
import { selectCount, increment, decrement, increaseAsync} from './counterSlice';


export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const onPressIncrement = () => {
    dispatch(increment())
  }
  const onPressDecrement = () => {
    dispatch(decrement())
  }
  const onAsyncIncrease = () => {
    dispatch(increaseAsync(5))
  }

  return (
    <View>
      <Text>Hello world!</Text>
      <Text>{count}</Text>
      <Button onPress={onPressIncrement} title="Increment" />
      <Button onPress={onPressDecrement} title="Decrement" />
      <Button onPress={onAsyncIncrease} title="Async Increase" />
    </View>
  );
}
