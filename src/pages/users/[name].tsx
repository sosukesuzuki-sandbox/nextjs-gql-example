import { useMemo, FC } from "react";
import { useRouter } from "next/router";
import { gql, QueryResult, useQuery } from "@apollo/client";
import { Profile, PROFILE_FRAGMENT } from "~/components/users/Profile";
import { Loading } from "~/components/common/Loading";

type Props = {
  data: QueryResult["data"];
  error: QueryResult["error"];
  loading: QueryResult["loading"];
};

const Presenter: FC<Props> = ({ loading, data }) =>
  loading ? (
    <Loading />
  ) : (
    <div>
      <Profile profile={data.user} />
    </div>
  );

const query = gql`
  ${PROFILE_FRAGMENT}
  query User($login: String!) {
    user(login: $login) {
      ...Profile
    }
  }
`;

const Container: FC = () => {
  const router = useRouter();
  const username = useMemo(() => {
    return router.query.name as string;
  }, [router.query]);
  const { data, error, loading } = useQuery(query, {
    variables: { login: username },
  });
  return <Presenter data={data} error={error} loading={loading} />;
};

export default function () {
  return <Container />;
}
