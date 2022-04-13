import { RepoList } from "./RepositoriesSection/types";

export type Profile = {
  bio: string;
  name: string;
  avatarUrl: string;
  repositories: RepoList;
};
