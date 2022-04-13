type Node = { name: string; description: string };
type Edge = { node: Node };
type RepoList = { edges: Edge[] };

type Profile = {
  bio: string;
  name: string;
  avatarUrl: string;
  repositories: RepoList;
};

export type { RepoList, Profile };
