const stateDefault = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "SET_NGUOI_DUNG": {
      console.log('set nguoi dung thanh cong');
      state.user = action.user;
      return { ...state };
    }

    case "XOA_NGUOI_DUNG": {
      console.log('da xoa nguoi dung');
      state.user = {};
     
      return { ...state };
    }

    default:
      return { ...state };
  }
};
