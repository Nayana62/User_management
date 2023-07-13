import * as UserApi from "../api/userRequest";

export const createNewUser = (formData) => async (dispatch) => {
  dispatch({ type: "CREATE_USER_REQUEST" });

  try {
    const { data } = await UserApi.createNewUser(formData);
    dispatch({ type: "CREATE_USER_SUCCESS", data: data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: "CREATE_USER_FAILURE" });
  }
};

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATE_USER_REQUEST" });
  try {
    const { data } = await UserApi.updateUser(id, formData);
    dispatch({ type: "UPDATE_USER_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATE_USER_FAILURE" });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    await UserApi.deleteUser(id);
    dispatch({ type: "DELETE_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "DELETE_USER_FAILURE" });
  }
};
