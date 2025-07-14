import { Text } from 'react-native';
import React from 'react';

const MiniAppCredit = React.lazy(() => import('CreditMiniApp/App'));

const MiniAppCreditScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <MiniAppCredit />
    </React.Suspense>
  );
};

export default MiniAppCreditScreen;
