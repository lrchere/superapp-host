import { Text } from 'react-native';
import React from 'react';

const MiniApp = React.lazy(() => import('MiniApp/App'));

const MiniAppGreenScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <MiniApp />
    </React.Suspense>
  );
};

export default MiniAppGreenScreen;
