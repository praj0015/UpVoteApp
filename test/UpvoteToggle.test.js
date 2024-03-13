import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM extensions
import UpvotesList from '../src/Components/UpVoteList';
import { test, expect } from 'jest';

test('color changes on click', () => {
  const { getByTestId } = render(<UpvotesList />);

  const upvoteButton = getByTestId('upvote-button');

  const initialColor = upvoteButton.style.backgroundColor;

  fireEvent.click(upvoteButton);

  const colorAfterClick = upvoteButton.style.backgroundColor;

  expect(colorAfterClick).not.toBe(initialColor);
});