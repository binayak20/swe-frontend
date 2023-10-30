import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test('renders the CampaignBanner', () => {
  render(<App />);
  const campaignBannerElement = screen.getByText(
    /Score 200 points and get 10% discount on your next mobile Recharge!/i,
  );
  expect(campaignBannerElement).toBeInTheDocument();
});
