module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api",
        destination: "http://127.0.0.1:5001/api",
      },
      {
        source: "/api/create",
        destination: "http://127.0.0.1:5001/api/create",
      },
    ];
  };
  return {
    rewrites,
  };
};