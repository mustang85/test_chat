import faker from 'faker'

export const getFakeData = (str) => {
  const [method, submethod ] = str.split('.');
  let fakeUsers = [];

  for (var i = 0; i < 10; i++) {
    fakeUsers.push(faker[method][submethod]());
  }

  return fakeUsers;
}
