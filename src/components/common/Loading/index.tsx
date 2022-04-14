import { FC } from "react";

const LoadingPresenter: FC = () => {
  return <p>loading...</p>;
};

const LoadingContainer: FC = () => {
  return <LoadingPresenter />;
};

export { LoadingContainer as Loading };
