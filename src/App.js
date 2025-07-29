import React, { useState } from 'react';
import Byo from './Byo';
import Menu from './cakeStoragePage';
import Cart from './cart';
import { Provider } from 'react-redux';
import store from './reducers/store.js';
import { ShoppingCart, Cake, LayoutGrid } from 'lucide-react';

import {
  AppContainer,
  HeaderSection,
  LogoImage,
  SiteTitle,
  WelcomeText,
  ContentWrapper,
  Tabs,
  TabsList,
  TabsTrigger,
  Footer,
  IntroSection,
} from './style';
import { motion } from 'framer-motion';
import logo from './logo.png';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from './reducers/cartSlice';

const InnerApp = ({ tab, setTab }) => {
  const itemCount = useSelector(selectCartItemCount);

  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}>
    {tab !== 'byo' && (
  <div
    style={{
      position: 'fixed',
      bottom: '5rem',
      right: '1rem',
      zIndex: 9999,
      backgroundColor: '#c084fc', // matches TabsTrigger active color
      color: '#fff',
      borderRadius: '9999px',
      padding: '0.5rem 1rem',
      fontWeight: '600',
      boxShadow: '0 4px 12px rgba(160, 87, 223, 0.3)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    }}
    onClick={() => setTab('byo')}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a855f7'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#c084fc'}
  >
    🍰 Customize Cake
  </div>
)}
    {tab !== 'cart' && (
  <div
    style={{
      position: 'fixed',
      top: '1rem',
      right: '1rem',
      cursor: 'pointer',
      zIndex: 10000, // bumped up for extra layering
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff', // optional contrast for visibility
      borderRadius: '9999px',
      padding: '0.5rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    }}
    onClick={() => setTab('cart')}
  >
    <div style={{ position: 'relative' }}>
      <ShoppingCart size={35} />

      <span
        style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          backgroundColor: '#f43f5e',
          color: '#fff',
          borderRadius: '9999px',
          padding: '2px 6px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}
      >
        {itemCount}
      </span>
    </div>
  </div>
  
)}

      <AppContainer style={{ paddingBottom: '4rem' }}>
        {/* Header */}
        <HeaderSection
          as={motion.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <LogoImage src={logo} alt="Sweet Layers Logo" />
          <SiteTitle>Happy Cake Bakery</SiteTitle>
          <WelcomeText>
            Choose a cake from our collection or design your own masterpiece!
          </WelcomeText>
        </HeaderSection>
        

        {/* Tabs */}
        <ContentWrapper>
          <Tabs>
            <TabsList>
              <TabsTrigger active={tab === 'menu'} onClick={() => setTab('menu')}>
                <LayoutGrid size={28} style={{ marginRight: '0.5rem' }} />
                Browse Cakes
              </TabsTrigger>
              <TabsTrigger active={tab === 'byo'} onClick={() => setTab('byo')}>
                <Cake size={28} style={{ marginRight: '0.5rem' }} />
                Build Cake
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Tab Content */}
          <IntroSection
            as={motion.section}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              maxWidth: '300px',
              width: '100%',
              margin: '0 auto',
              padding: '1rem',
            }}
          >
            {tab === 'byo' && <Byo />}
            {tab === 'menu' && <Menu />}
            {tab === 'cart' && <Cart />}
          </IntroSection>
        </ContentWrapper>
      </AppContainer>

      {/* Footer */}
      <Footer>
        <p>
          This website is a demonstration created by Agrandir Technologies for Happy Cake Bakery.
          All content is for display and testing purposes only. Orders will not be processed.
        </p>
      </Footer>
      </motion.div>
  );
};

const HomePage = () => {
  const [tab, setTab] = useState('menu');

  return (
    <Provider store={store}>
      <InnerApp tab={tab} setTab={setTab} />
    </Provider>
  );
};

export default HomePage;
