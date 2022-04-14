import { useMemo, FC } from "react";
import { useRouter } from "next/router";
import { ApolloError } from "@apollo/client";
import { ProfileSection } from "~/components/users/ProfileSection";
import { Loading } from "~/components/common/Loading";
import { UserQuery, useUserQuery } from "~/generated/graphql";
import { RepositoriesSection } from "~/components/users/RepositoriesSection";

type PresenterProps = {
  user?: UserQuery["user"];
  error?: ApolloError;
  loading: boolean;
};
const Presenter: FC<PresenterProps> = ({ loading, user }) =>
  loading || user == null ? (
    <Loading />
  ) : (
    <div>
      <ProfileSection profile={user} />
      <RepositoriesSection repositories={user} />
    </div>
  );

const Container: FC = () => {
  const router = useRouter();
  const username = useMemo(() => {
    return router.query.name as string;
  }, [router.query]);
  const { data, error, loading } = useUserQuery({
    variables: { login: username },
  });
  return <Presenter user={data?.user} error={error} loading={loading} />;
};

export default function () {
  return <Container />;
}
