export function showModalAction(dispatch, payload) {
  dispatch({ type: "SHOW_MODAL", payload });
}

export function closeModalAction(dispatch) {
  dispatch({ type: "CLOSE_MODAL" });
}
