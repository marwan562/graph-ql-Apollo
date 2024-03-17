import { gql, useQuery } from "@apollo/client";

const GET_LANGUAGE_BY_CODE = gql`
  query getLanguageById($code: ID!) {
    language(code: $code) {
      name
      native
      rtl
    }
  }
`;

const useCountry = (id) => {
  const { loading, error, data } = useQuery(GET_LANGUAGE_BY_CODE, {
    variables: {
      code: id,
    },
  });
  return { loading, error, data };
};

export default useCountry;
