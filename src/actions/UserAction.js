import * as UserRequest from "../api/UserRequest"


export const updateUser=(id, formData)=> async(dispatch)=> {
    dispatch({type: "UPDATING_START"})
    try{
        const {data} = await UserRequest.updateUser(id, formData);
        console.log(data)
        dispatch({type: "UPDATING_SUCCESS", data: data})
    }   
    catch(error){
        dispatch({type: "UPDATING_FAIL"})
    }
}

export const followUser = (id, data) => async (dispatch) => {
    try {
      await UserRequest.followUser(id, data);
      dispatch({ type: "FOLLOW_USER", data: id });
    } catch (error) {
        dispatch({type: "Follow_FAIL"})
    }
  };

export const unfollowUser = (id, data)=> async(dispatch)=> {
    dispatch({type: "UNFOLLOW_USER", data: id})
    UserRequest.unfollowUser(id, data)
}