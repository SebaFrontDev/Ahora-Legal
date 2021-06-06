import React from  'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Services from '../components/Services';
import SucceessStories from '../components/SuccessStories';
import Banner from '../components/Banner';
import CheckoutForm from '../components/CheckoutForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <>
          <Header />
          <Main />
          <Services />
          <SucceessStories />
          <Banner />
          <CheckoutForm />
          <Footer />
        </>
    )
};

export default Home;