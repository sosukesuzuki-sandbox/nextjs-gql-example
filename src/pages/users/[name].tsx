import { useMemo, FC } from "react";
import { useRouter } from "next/router";
import { gql, QueryResult, useQuery } from "@apollo/client";
import {
  ProfileSection,
  Profile,
  PROFILE_FRAGMENT,
} from "~/components/users/ProfileSection";
import { Loading } from "~/components/common/Loading";

type Result = { user: Profile };
type PageQueryResult = QueryResult<Result>;

type PresenterProps = {
  data: PageQueryResult["data"];
  error: PageQueryResult["error"];
  loading: PageQueryResult["loading"];
};
const Presenter: FC<PresenterProps> = ({ loading, data }) =>
  loading || data == null ? (
    <Loading />
  ) : (
    <div>
      <ProfileSection profile={data.user} />
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
  const { data, error, loading } = useQuery<Result>(query, {
    variables: { login: username },
  });
  return <Presenter data={data} error={error} loading={loading} />;
};

export default function () {
  return <Container />;
}
