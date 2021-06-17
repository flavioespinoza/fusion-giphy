// @flow
import balanced from '../balanced'

test('valid parentheses', () => {
  expect(balanced('[()]{}{[()()]()}')).toEqual(true);
  expect(balanced('[(()]{}{[()()]()}')).toEqual(false);
  expect(balanced('[(])')).toEqual(false);
  expect(balanced('[*()999]{}{[(22)(--)]()8}')).toEqual(true);
  expect(balanced('[*(()999]{}{[(22)(--)]()8}')).toEqual(false);
  expect(balanced('[*(]999)')).toEqual(false);
});