import { listDataType, pinnedRepoType } from "../types";

export const homeListData: listDataType[] = [
  {
    color: "gray",
    label: "Repositories",
    name: "repo",
    params: { type: "repos" },
  },
  {
    color: "orange",
    label: "Organizations",
    name: "organization",
    params: { type: "orgs" },
  },
  {
    color: "yellow",
    label: "Starred",
    name: "star",
    params: { type: "starred" },
  },
];

export const pinnedRepoData: pinnedRepoType[] = [
  {
    description:
      "A simple React Native app to show the Github API app to show the Github API",
    maxLines: 2,
    stargazers_count: 1,
    language: "TypeScript",
    name: "Github API",
  },
  {
    description: "A simple React Native app to show the Github API",
    maxLines: 2,
    stargazers_count: 1,
    language: "TypeScript",
    name: "Github API",
  },
  {
    description: "A simple React Native app to show the Github API",
    maxLines: 2,
    stargazers_count: 1,
    language: "TypeScript",
    name: "Github API",
  },
  {
    description: "A simple React Native app to show the Github API",
    maxLines: 2,
    stargazers_count: 1,
    language: "TypeScript",
    name: "Github API",
  },
  {
    description: "A simple React Native app to show the Github API",
    maxLines: 2,
    stargazers_count: 1,
    language: "TypeScript",
    name: "Github API",
  },
];
