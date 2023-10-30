import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  const originalAlert = window.alert;

  beforeAll(() => {
    window.alert = jest.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it('SHOULD Render StartButton with proper config', () => {
    const { getByTestId } = render(<StartButton />);

    const startButton = getByTestId(TestElement.START_BUTTON);

    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveTextContent(gameConfig.startButton.buttonText);
    expect(startButton).toHaveStyle({
      backgroundColor: '#34d399',
      color: '#022c22',
    });
  });

  it('SHOULD Render StartButton with click event', () => {
    const { getByTestId } = render(<StartButton />);
    const startButton = getByTestId('START_BUTTON');
    fireEvent.click(startButton);

    expect(window.alert).toHaveBeenCalled();
  });
});
