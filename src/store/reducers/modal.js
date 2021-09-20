export function modalReducers(state, action) {
  const { payload } = action;

  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, modal: { show: true, data: payload } };
    case "CLOSE_MODAL":
      return { ...state, modal: { show: false, data: [] } };
    default:
      return state;
  }
}
