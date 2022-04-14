import { FC, useMemo } from "react";
import Image from "next/image";
import { ProfileFragment, RepositoriesFragment } from "~/generated/graphql";
import { RepositoriesSection } from "../RepositoriesSection";

type PresenterProps = {
  login: string;
  name?: string | null;
  bio?: string | null;
  avatorUrl: string;
  repositories: RepositoriesFragment["repositories"];
};
const Presenter: FC<PresenterProps> = ({
  login,
  name,
  bio,
  avatorUrl,
  repositories,
}) => (
  <div>
    <div>
      <h1>{login}</h1>
      <Image src={avatorUrl} width="50" height="50" />
      {bio ? <p>{name}</p> : null}
      {bio ? <p>{bio}</p> : null}
    </div>
    <div>
      <RepositoriesSection repositories={repositories} />
    </div>
  </div>
);

type ContainerProps = { profile: ProfileFragment };
const Container: FC<ContainerProps> = ({ profile }) => {
  const login = useMemo(() => {
    return profile.login;
  }, [profile]);
  const name = useMemo(() => {
    return profile.name;
  }, [profile]);
  const bio = useMemo(() => {
    return profile.name;
  }, [profile]);
  const avatorUrl = useMemo(() => {
    return profile.avatarUrl ?? `https://github.com/identicons/${login}.png`;
  }, [profile, login]);
  return (
    <Presenter
      login={login}
      name={name}
      bio={bio}
      avatorUrl={avatorUrl}
      repositories={profile.repositories}
    />
  );
};

export { Container as ProfileSection };
