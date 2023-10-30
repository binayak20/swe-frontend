import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ContainerStyled = styled.div(
  (): CSSObject => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: gameConfig.container.maxWidth,
    height: gameConfig.container.maxHeight,
    maxWidth: gameConfig.container.maxWidth,
    maxHeight: gameConfig.container.maxHeight,
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
    '@media (max-width: 1000px)': {
      maxWidth: '80%',
      maxHeight: '80vh',
    },
    '@media (max-height: 1000px)': {
      maxHeight: '80vh',
    },
    '@media (max-width: 360px)': {
      maxWidth: '100%',
      height: 'calc(100vw * 9/16)',
    },
    '@media (min-width: 640px)': {
      maxWidth: '360px',
    },
  }),
);
