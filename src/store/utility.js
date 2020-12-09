export const updateObject = (UpdateObject, UpdateValues) => {
  return {
    ...UpdateObject,
    ...UpdateValues,
  };
};
