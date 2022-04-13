import { gql } from "@apollo/client";

export const PROFILE_FRAGMENT = gql`
  fragment Profile on User {
    bio
    name
    avatarUrl
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
