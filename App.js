import React from 'react';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{ uri: 'http://3vil.eu/Notesmaster/trumbowyg-jquery/' }}
      // source={{ uri: 'http://3vil.eu/Notesmaster/ckeditor-4-full-all/index.html' }}
      style={{ marginTop: 20 }}
    />
  );
};

export default App;
