import { useQuery } from "@apollo/client";

const useCharactersF = (getFetch) => {
  const { error, loading, data } = useQuery(getFetch);
  return { error, loading, data };
};

export default useCharactersF;
