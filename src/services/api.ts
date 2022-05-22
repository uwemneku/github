import { Repository, User } from "../types";

const BASE_URL = "https://api.github.com/users/uwemneku";

export async function getUser() {
  const response = await fetch(`${BASE_URL}`);
  return response.json() as Promise<User>;
}

export async function* fetchDataRecursively(endpoint: string) {
  let nextLink = `${BASE_URL}/${endpoint}`;
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

export async function getNumberOfStaredRepo() {
  const response = await fetch(`${BASE_URL}/starred?per_page=1`);
  const link = response.headers
    .get("link")
    ?.split(",")
    .find((u) => u.includes(`rel="last"`));
  const pageCount = parseInt(link?.match(/page=(\d+)*>/)?.[1] || "0");
  return pageCount;
}
