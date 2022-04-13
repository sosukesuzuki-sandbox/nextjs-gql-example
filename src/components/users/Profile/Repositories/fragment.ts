import { gql } from "@apollo/client";

export const REPOSITORIES_FRAGMENT = gql`
  fragment RepoList on User {
    repositories(first: 5) {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;
