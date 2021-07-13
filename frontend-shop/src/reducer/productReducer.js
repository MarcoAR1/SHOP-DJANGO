const ACTION_TYPE = {}

export const productReducer = (state = {}, { type, peyload }) => {
  if (type === ACTION_TYPE) {
    return peyload
  }

  return state
}
