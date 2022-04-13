import { FC } from "react";
import Image from "next/image";
import { Profile } from "./types";
import { RepositoriesSection } from "./RepositoriesSection";
import { RepoList } from "./RepositoriesSection/types";

export * from "./types";
export * from "./fragment";

type PresenterProps = {
  name: string;
  bio: string;
  avatorUrl: string;
  repoList: RepoList;
};
const Presenter: FC<PresenterProps> = ({ name, bio, avatorUrl, repoList }) => (
  <div>
    <div>
      <Image src={avatorUrl} width="50" height="50" />
      <h1>{name}</h1>
      {bio ? <p>{bio}</p> : null}
    </div>
    <div>
      <RepositoriesSection repoList={repoList} />
    </div>
  </div>
);

type ContainerProps = {
  profile: Profile;
};
const Container: FC<ContainerProps> = ({ profile }) => {
  return (
    <Presenter
      name={profile.name}
      bio={profile.bio}
      avatorUrl={profile.avatarUrl}
      repoList={profile.repositories}
    />
  );
};

export { Container as ProfileSection };
