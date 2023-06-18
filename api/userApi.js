import instance from "./instance";

async function getUser(uid) {
  try {
    const response = await instance.get(`api/users/${uid}`);
    const { data } = response.data;
    return data[0];
  } catch (error) {
    console.log(error);
  }
}

export { getUser };


// export const getUserById = async (uid: string) => {
//   const response = await getRequest(`/users/${uid}`);
//   return response;
// };
