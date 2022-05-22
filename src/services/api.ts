import { Repository, User } from "../types";

const BASE_URL = "https://api.github.com";
const USER_NAME = "uwemneku";

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/users/${USER_NAME}${endpoint}`);
  return response;
};
export async function getUser() {
  const response = await fetchData("");
  return response.json() as Promise<User>;
}

async function getUserRepo() {
  const response = await fetchData("/repo");
  return response.json();
}
export async function getUserOrganizations() {
  const response = await fetchData("/orgs");
  return response.json();
}

export async function getUserStarredRepo() {
  const response = await fetchData("/starred");
  return response.json();
}

export async function getNumberOfStaredRepo() {
  const response = await fetchData("/starred?per_page=1");
  const link = response.headers
    .get("link")
    ?.split(",")
    .find((u) => u.includes(`rel="last"`));
  const pageCount = parseInt(link?.match(/page=(\d+)*>/)?.[1] || "0");
  return pageCount;
}
