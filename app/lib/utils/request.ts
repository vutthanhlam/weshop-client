export const graphqlRequest = async (payload, option = {}) => {
  console.log(payload);
  const res = await fetch(`http://localhost:4000/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Authorization: `Bear ${localStorage.getItem("accessToken")}`,
      ...option,
    },
    body: JSON.stringify(payload),
  });
  const { data } = await res.json();
  console.log(data);
  return data;
};
