import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Container } from './styles';
import Button from '../Button';

export default function Footer() {

  const { theme, handleToggleTheme, handleSetPurpleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <Button onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </Button>
      <Button onClick={handleSetPurpleTheme}>🟣</Button>
    </Container>
  );
}