import React from  'react';
import MobileHeader from '../components/MobileHeader';
import MobileMain from '../components/MobileMain';
import MobileServices from '../components/MobileServices';
import MobileSuccessStories from '../components/MobileSuccessStories';
import MobileBanner from '../components/MobileBanner';
import MobileCheckoutForm from '../components/MobileCheckoutForm';
import MobileFooter from '../components/MoblieFooter';

const MobileHome: React.FC = () => {
    return (
        <>
          <MobileHeader />
          <MobileMain />
          <MobileServices />
          <MobileSuccessStories />
          <MobileBanner />
          <MobileCheckoutForm />
          <MobileFooter />
        </>
    )
};

export default MobileHome;