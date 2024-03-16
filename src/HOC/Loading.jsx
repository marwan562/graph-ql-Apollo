/* eslint-disable react/prop-types */
const Loading = ({ loading, error, children }) => {
  return loading ? (
    <p>loading..!</p>
  ) : error ? (
    <p>Error: {error.message}</p>
  ) : (
    children
  );
};

export default Loading;
