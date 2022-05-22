import { listDataType, pinnedRepoType } from "../types";
import colors from "./colors.json";
export const languageColors = colors;
export const homeListData: listDataType[] = [
  {
    color: "gray",
    label: "Repositories",
    name: "repo",
    params: "repos",
  },
  {
    color: "orange",
    label: "Organizations",
    name: "organization",
    params: "orgs",
  },
  {
    color: "yellow",
    label: "Starred",
    name: "star",
    params: "starred",
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
