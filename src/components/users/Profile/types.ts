import { RepoList } from "../Repositories/types";

export type Profile = {
  bio: string;
  name: string;
  avatarUrl: string;
  repositories: RepoList;
};
