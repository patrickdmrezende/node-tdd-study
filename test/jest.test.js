test('should know the main assertions of jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 12;
  expect(number).not.toBeNull();
  expect(number).toBe(12);
  expect(number).toEqual(12);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(13);
});

test('should know work with objects', () => {
  const obj = { name: 'Patrick', mail: 'patrick@mail.com' };
  expect(obj).toHaveProperty('name', 'Patrick');
  expect(obj).toHaveProperty('mail', 'patrick@mail.com');
  expect(obj.mail).toBe('patrick@mail.com');

  const obj2 = { name: 'Patrick', mail: 'patrick@mail.com' };
  expect(obj).toEqual(obj2);
});
