export function addUser(name, gift) {
  return {
    type: 'ADD_USER',
    name,
    gift
  };
}
