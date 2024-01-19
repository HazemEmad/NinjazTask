import React from 'react';
import {RealmProvider} from '@realm/react';

import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/navigation';
import {Owner, PostSchema} from './src/realm/schemas/PostSchema';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={style.container}>
      <RealmProvider schema={[PostSchema, Owner]}>
        <AppNavigation />
      </RealmProvider>
    </SafeAreaView>
  );
}
export default App;

const style = StyleSheet.create({container: {flex: 1}});
