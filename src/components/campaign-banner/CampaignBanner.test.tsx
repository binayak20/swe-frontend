import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CampaignBanner } from './CampaignBanner';
import { TestElement } from '../../enums/TestElement';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    const { getByTestId } = render(<CampaignBanner />);
    const campaignBannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);

    expect(campaignBannerElement).toHaveStyle({
      backgroundColor: 'rgb(6, 182, 212)',
      borderRadius: '8px',
      color: 'rgb(207, 250, 254)',
      display: 'flex',
      flexDirection: 'column',
      padding: '12px',
      position: 'absolute',
      textAlign: 'center',
      top: '10%',
      width: '80%',
    });
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    window.innerWidth = 250;

    const { getByTestId } = render(<CampaignBanner />);
    const campaignBannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);

    expect(campaignBannerElement).toBeInTheDocument();
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    window.innerWidth = 600;

    const { getByTestId } = render(<CampaignBanner />);
    const campaignBannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);

    expect(campaignBannerElement).toBeInTheDocument();
  });
});
