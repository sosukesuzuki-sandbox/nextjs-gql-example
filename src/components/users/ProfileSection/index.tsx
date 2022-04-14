import { FC, useMemo } from "react";
import Image from "next/image";
import { ProfileFragment } from "~/generated/graphql";

type PresenterProps = {
  login: string;
  name?: string | null;
  bio?: string | null;
  avatorUrl: string;
};
const Presenter: FC<PresenterProps> = ({ login, name, bio, avatorUrl }) => (
  <div>
    <div>
      <h1>{login}</h1>
      <Image src={avatorUrl} width="50" height="50" />
      {name ? <p>{name}</p> : null}
      {bio ? <p>{bio}</p> : null}
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
    return profile.bio;
  }, [profile]);
  const avatorUrl = useMemo(() => {
    return profile.avatarUrl ?? `https://github.com/identicons/${login}.png`;
  }, [profile, login]);
  return (
    <Presenter login={login} name={name} bio={bio} avatorUrl={avatorUrl} />
  );
};

export { Container as ProfileSection };
