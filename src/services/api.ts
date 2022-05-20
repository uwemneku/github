import { User } from "../types";

const BASE_URL = "https://api.github.com";
const USER_NAME = "uwemneku";

export async function getUser() {
  const response = await fetch(`${BASE_URL}/users/${USER_NAME}`);
  return response.json() as Promise<User>;
}

async function getUserRepo() {
  const response = await fetch(`${BASE_URL}/users/${USER_NAME}/repos`);
  return response.json();
}

async function getUserStarredRepo() {
  const response = await fetch(`${BASE_URL}/users/${USER_NAME}/starred`);
  return response.json();
}
