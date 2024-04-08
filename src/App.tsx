import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from '@store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Router from '@navigation/Router';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={false}>
        <GestureHandlerRootView style={styles.fill}>
          <SafeAreaProvider>
            <BottomSheetModalProvider>
              <Router />
            </BottomSheetModalProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
});
