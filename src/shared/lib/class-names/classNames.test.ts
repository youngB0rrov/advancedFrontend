import { classNames } from './classNames';

describe('classNames', () => {
  test('test', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('test with additions', () => {
    expect(classNames('someClass', {}, ['addon1', 'addon2'])).toBe('someClass addon1 addon2');
  });

  test('test with everything', () => {
    expect(classNames('someClass', { hovered: true, disabled: false }, ['add4', 'add5']))
      .toBe('someClass hovered add4 add5');
  });

  test('test empty', () => {
    expect(classNames()).toBe('');
  });

  test('test modes with undefined', () => {
    expect(classNames('someClass', { hovered: undefined, disabled: true }, ['add4', 'add5']))
      .toBe('someClass disabled add4 add5');
  });
});
