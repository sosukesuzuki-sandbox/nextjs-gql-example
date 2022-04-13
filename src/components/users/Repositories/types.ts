type Node = {
  name: string;
  description: string;
};

type Edge = {
  node: Node;
};

export type RepoList = {
  edges: Edge[];
};
