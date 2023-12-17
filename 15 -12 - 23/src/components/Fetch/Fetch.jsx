const FetchData = async () => {
  const response = await fetch(
    "https://api.slingacademy.com/v1/sample-data/photos"
  );
  const data = await response.json();
  return data;
};

export default FetchData;
