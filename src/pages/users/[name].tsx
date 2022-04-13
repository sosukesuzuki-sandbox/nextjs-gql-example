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

function usePageQuery(username: string) {
  return useMemo(
    () => gql`
      ${PROFILE_FRAGMENT}
      query {
        user(login: "${username}") {
	  ...Profile
        }
      }
  `,
    [username]
  );
}

const Container: FC = () => {
  const router = useRouter();
  const username = useMemo(() => {
    return router.query.name as string;
  }, [router.query]);
  const query = usePageQuery(username);
  const { data, error, loading } = useQuery(query);
  return <Presenter data={data} error={error} loading={loading} />;
};

export default function () {
  return <Container />;
}
