import React from 'react';
import { Header } from './header';
import { NewsWrapperComponent } from './NewsList';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <NewsWrapperComponent></NewsWrapperComponent>
    </div>
  );
};

export default Home;
