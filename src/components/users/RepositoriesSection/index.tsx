import { FC, useMemo } from "react";
import { RepositoriesFragment } from "~/generated/graphql";

type Repositories = RepositoriesFragment["repositories"];
type Egdes = Repositories["edges"];

type PresenterProps = {
  edges: NonNullable<Egdes>;
};
const RepositoriesSectionPresenter: FC<PresenterProps> = ({ edges }) => (
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
  repositories: RepositoriesFragment;
};
const RepositoriesSectionContainer: FC<ContainerProps> = ({ repositories }) => {
  const edges = useMemo(() => {
    return repositories.repositories.edges ?? [];
  }, [repositories]);
  return <RepositoriesSectionPresenter edges={edges} />;
};

export { RepositoriesSectionContainer as RepositoriesSection };
