import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;

const useCharacter = (id) => {
  const [getCharacter, { loading, error, data }] = useLazyQuery(GET_CHARACTER, {
    variables: {
      id: id,
    },
  });
  return { loading, error, data, getCharacter };
};

export default useCharacter;
