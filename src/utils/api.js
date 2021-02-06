const baseUrl = "https://artful-iudex.herokuapp.com";
const callApi = async (url, method = "GET", payload = null) => {
  const requestOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };
  if (payload) requestOptions["body"] = JSON.stringify(payload);

  const response = await fetch(url, requestOptions);
  const data = response.json();
  return data;
};
const postReaction=async(payload)=>{
  try {
    const data = await callApi(baseUrl + "/user_content_reactions","POST",payload);
    return data;
  } catch (error) {
    console.log(error);
  }
}
const deleteReaction=async(id)=>{
  try {
    const data = await callApi(baseUrl + "/user_content_reactions/"+id,"DELETE");
    return data;
  } catch (error) {
    console.log(error);
  }
}
const updateReaction=async(id,payload)=>{
  try {
    const data = await callApi(baseUrl + "/user_content_reactions/"+id,"PUT",payload);
    return data;
  } catch (error) {
    console.log(error);
  }
}
const getReactions = async () => {
  try {
    const data = await callApi(baseUrl + "/reactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getReactedDetails = async () => {
  try {
    const data = await callApi(baseUrl + "/user_content_reactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getAllContent = async () => {
  try {
    const data = await callApi(baseUrl + "/orders");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getAllUsers = async () => {
  try {
    const data = await callApi(baseUrl + "/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};
const login = async (email) => {
  try {
    const data = await callApi(baseUrl + "/users?email=" + email);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  getAllUsers,
  getAllContent,
  getReactedDetails,
  getReactions,
  postReaction,
  updateReaction,
  deleteReaction
};
