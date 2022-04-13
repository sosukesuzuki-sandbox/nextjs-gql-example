import { FC } from "react";

const Presenter: FC = () => {
  return <p>loading...</p>;
};

const Container: FC = () => {
  return <Presenter />;
};

export { Container as Loading };
