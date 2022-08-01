import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from './styles/themes';

class App extends React.Component {

  state = {
    changed: false,
  }

  componentDidMount() {
    console.debug('componentDidMount executed')
  }

  componentDidUpdate(prevProps, prevState) {
    console.debug({
      currentState: this.state,
      currentProps: this.props,
      prevState,
      prevProps,
    });
  }

  componentDidCatch(error, info) {

    console.debug({ error, info });

  }

  shouldComponentUpdate(nextProps, nextState) {

    console.debug({
      currentState: this.state,
      currentProps: this.props,
      nextState,
      nextProps,
    });

    return true;
  }

  componentWillUnmount() {
    console.debug('Tchau tchau!!!')
  }

  render() {
    console.debug('rendered');

    return (
      <ThemeProvider>

        <button onClick={() => this.setState({ changed: true })}>
          Change state
        </button>

        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }

}

export default App;
