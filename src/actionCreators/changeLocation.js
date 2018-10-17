export default function changeLocation(location) {
  return{
    type: "SET_LOCATION",
    payload:location,
  };
}

// expect(changeLocation("Seattle")).toEqual({type: "SET_LOCATION", payload: "Seattle"});
