import { Repository, User } from "../types";

const BASE_URL = "https://api.github.com";
const USER_NAME = "uwemneku";

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/users/${USER_NAME}${endpoint}`, {
    headers: {
      Authorization: "Bearer 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",
    },
  });
  return response;
};
export async function getUser() {
  const response = await fetchData("");
  return response.json() as Promise<User>;
}

export async function* fetchDataRecursively(endpoint: string) {
  let nextLink = `${BASE_URL}/users/${USER_NAME}${endpoint}`;
  while (nextLink) {
    const response = await fetch(nextLink);
    const link = response.headers
      .get("link")
      ?.split(",")
      .find((u) => u.includes(`rel="last"`));
    nextLink =
      link?.split(";")[0].replace(">", "").replace("<", "").trim() || "";
    yield response.json() as any as Repository[];
  }
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
