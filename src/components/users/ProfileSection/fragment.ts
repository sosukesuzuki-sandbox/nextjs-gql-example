import { gql } from "@apollo/client";
import { REPOSITORIES_FRAGMENT } from "./RepositoriesSection";

export const PROFILE_FRAGMENT = gql`
  ${REPOSITORIES_FRAGMENT}
  fragment Profile on User {
    bio
    name
    avatarUrl
    ...RepoList
  }
`;
