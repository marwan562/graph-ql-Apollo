import { useLazyQuery, gql } from "@apollo/client";

const SEARCH_LOCATIONS = gql`
  query getCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          id
          name
        }
      }
    }
  }
`;

const useSearchLocations = (name) => {
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    SEARCH_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );
  return { loading, error, data, called ,getLocations};
};

export default useSearchLocations;
