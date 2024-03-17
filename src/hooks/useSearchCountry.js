import { useLazyQuery, gql } from "@apollo/client";

const SEARCH_COUNTRY = gql`
  query getSearchLanguage($code: String!) {
    languages(filter: { code: { in: [$code] } }) {
      code
      name
      native
    }
  }
`;

const useSearchCountry = (search) => {
  const [getSearchLanguage, { loading, error, data }] = useLazyQuery(
    SEARCH_COUNTRY,
    {
      variables: {
        code: search,
      },
    }
  );
  return { loading, error, data, getSearchLanguage };
};

export default useSearchCountry;
