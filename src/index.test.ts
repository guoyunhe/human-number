import { humanNumber } from '.';

describe('humanNumber', () => {
  it('normal', async () => {
    expect(humanNumber('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(humanNumber('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
