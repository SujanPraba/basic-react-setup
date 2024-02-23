// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loggedIn: false,
//   user: null,
// };

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     SET_LOGIN(state, action) {
//       state.loggedIn = true;
//       state.user = action.payload; // Save user data from response
//     },
//     SET_LOGOUT(state) {
//       state.loggedIn = false;
//       state.user = null;
//     },
//     RESET_USER(state) {
//       return initialState;
//     },
//   },
// });

// export const { SET_LOGIN, SET_LOGOUT, RESET_USER } = loginSlice.actions;
// export default loginSlice.reducer;