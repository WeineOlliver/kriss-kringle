export default function users(state = [], action) {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: Math.random(),
          name: action.name,
          gift: action.gift
        }
      ];
    default:
      return state;
  }
}
