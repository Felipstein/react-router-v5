import React, { createContext, useState  } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {

  constructor(props) {
    super(props);

    let theme = 'dark';
    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch(err) {
      console.log(err);
    }

    this.state = {
      theme,
    }
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }), this.handleLocalStorageTheme);
  }

  handleSetPurpleTheme = () => {
    this.setState({ theme: 'purple' }, this.handleLocalStorageTheme);
  }

  handleLocalStorageTheme = () => {
    localStorage.setItem('theme', JSON.stringify(this.state.theme));
  }

  componentDidUpdate(prevProps, prevState) {

    if(prevState.theme !== this.state.theme) {
      console.debug('tema mudou...');
      // this.handleLocalStorageTheme();
    }

  }

  render() {

    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
          handleSetPurpleTheme: this.handleSetPurpleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );

  }

}