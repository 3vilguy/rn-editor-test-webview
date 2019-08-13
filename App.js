import React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{ uri: 'http://google.com/' }}
      style={{ marginTop: 20 }}
    />
  );
};

export default App;
