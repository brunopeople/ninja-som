export function showModal(dispatch, payload) {
  dispatch({ type: "SHOW_MODAL", payload });
}

export function closeModal(dispatch, payload) {
  dispatch({ type: "CLOSE_MODAL", payload });
}
