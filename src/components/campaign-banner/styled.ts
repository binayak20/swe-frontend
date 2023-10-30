import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export const BannerStyled = styled.div(
  (): CSSObject => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column' as FlexDirection, // Ensure that flexDirection is of type FlexDirection
    textAlign: 'center',
    top: gameConfig.campaignBanner.offsetTop,
    borderRadius: gameConfig.campaignBanner.borderRadius,
    width: gameConfig.campaignBanner.width,
    padding: gameConfig.campaignBanner.padding,
    backgroundColor: gameConfig.campaignBanner.background,
    color: gameConfig.campaignBanner.textColor,
    '@media (max-width: 250px)': {
      width: '100%', // Make it full width
      padding: '6px', // Adjust padding for smaller viewports
    },
    '@media (max-height: 600px)': {
      width: '100%', // Make it full width
      padding: '6px', // Adjust padding for smaller viewports
    },
  }),
);
