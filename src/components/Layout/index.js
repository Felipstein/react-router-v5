import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    console.debug('Componente vai desmontar...');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.debug('scrolled...');
  }

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }

}