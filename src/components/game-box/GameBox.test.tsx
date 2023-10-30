import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { App } from '../../app/App';
import { TestElement } from '../../enums/TestElement';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    window.innerWidth = 1000;
    window.innerHeight = 1000;

    const { getByTestId } = render(<App />);
    const gameBoxElement = getByTestId(TestElement.GAME_BOX);
    const campaignBannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    const startButtonElement = getByTestId(TestElement.START_BUTTON);

    expect(gameBoxElement).toContainElement(campaignBannerElement);
    expect(gameBoxElement).toContainElement(startButtonElement);

    expect(gameBoxElement).toBeInTheDocument();
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    window.innerWidth = 300;
    window.innerHeight = 1000;

    const { getByTestId } = render(<App />);
    const gameBoxElement = getByTestId(TestElement.GAME_BOX);
    const campaignBannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    const startButtonElement = getByTestId(TestElement.START_BUTTON);

    expect(gameBoxElement).toContainElement(campaignBannerElement);
    expect(gameBoxElement).toContainElement(startButtonElement);

    expect(gameBoxElement).toBeInTheDocument();
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    window.innerWidth = 1000;
    window.innerHeight = 600;

    const { getByTestId } = render(<App />);
    const gameBoxElement = getByTestId(TestElement.GAME_BOX);
    const campaignBannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    const startButtonElement = getByTestId(TestElement.START_BUTTON);

    expect(gameBoxElement).toContainElement(campaignBannerElement);
    expect(gameBoxElement).toContainElement(startButtonElement);

    expect(gameBoxElement).toBeInTheDocument();
  });
});
