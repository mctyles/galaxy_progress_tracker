import { usersController } from "./api";

export async function login(username, password) {
  try {
    const response = await usersController.post(`login`, {
      username,
      password,
    });

    const { data } = response;

    return data;
  } catch (error) {
    return { error: error.response };
  }
}

export async function register(firstName, lastName, username, password) {
  try {
    const response = await usersController.post(`register`, {
      firstName,
      lastName,
      username,
      password,
    });
    const { data } = response;
    return data;
  } catch (error) {
    return {
      error: error.response,
    };
  }
}
