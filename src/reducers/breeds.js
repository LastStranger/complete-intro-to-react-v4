export default function BreedsReducer (state=[], action) {
  switch (action.type) {
    case "CHANGE_BREEDS":
      return action.payload;
    default:
      return state;
  }
}
