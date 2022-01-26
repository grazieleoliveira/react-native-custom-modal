/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyModal from './components/Modal';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <Text>Open Modal</Text>
      </TouchableOpacity>
      {toggle && (
        <MyModal
          onClose={() => setToggle(!toggle)}
          onOk={() => setToggle(!toggle)}
          title="Have a Promo Code?"
          description="Please login to redeem your promo code"
          buttonText="Login"
          visible={toggle}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
