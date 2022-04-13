import { FC } from "react";
import { RepoList } from "./types";

type PresenterProps = {
  repoList: RepoList;
};
const Presenter: FC<PresenterProps> = ({ repoList }) => (
  <div>
    {repoList.edges.map(({ node }) => (
      <div style={{ border: "1px solid black" }} key={node.name}>
        <p>{node.name}</p>
        <p>{node.description}</p>
      </div>
    ))}
  </div>
);

type ContainerProps = {
  repoList: RepoList;
};
const Container: FC<ContainerProps> = ({ repoList }) => {
  return <Presenter repoList={repoList} />;
};

export { Container as Repositories };
