import { gql } from "@apollo/client";
import { REPOSITORIES_FRAGMENT } from "../Repositories";

export const PROFILE_FRAGMENT = gql`
  ${REPOSITORIES_FRAGMENT}
  fragment Profile on User {
    bio
    name
    avatarUrl
    ...RepoList
  }
`;
