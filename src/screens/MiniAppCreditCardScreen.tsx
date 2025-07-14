import { Text } from 'react-native';
import React from 'react';

const MiniAppCreditCard = React.lazy(() => import('CreditCardMiniApp/App'));

const MiniAppCreditCardScreen = () => {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <MiniAppCreditCard />
    </React.Suspense>
  );
};

export default MiniAppCreditCardScreen;
