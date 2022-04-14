import { FC, useMemo } from "react";
import { RepositoriesFragment } from "~/generated/graphql";

type Repositories = RepositoriesFragment["repositories"];
type Egdes = Repositories["edges"];

type PresenterProps = {
  edges: NonNullable<Egdes>;
};
const Presenter: FC<PresenterProps> = ({ edges }) => (
  <div>
    {edges.map((edge) =>
      edge?.node ? (
        <div style={{ border: "1px solid black" }} key={edge.node.name}>
          <p>{edge.node.name}</p>
          <p>{edge.node.description}</p>
        </div>
      ) : null
    )}
  </div>
);

type ContainerProps = {
  repositories: RepositoriesFragment["repositories"];
};
const Container: FC<ContainerProps> = ({ repositories }) => {
  const edges = useMemo(() => {
    return repositories.edges ?? [];
  }, [repositories]);
  return <Presenter edges={edges} />;
};

export { Container as RepositoriesSection };
