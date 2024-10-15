import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the API based on the selected currency
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        // Update the state with the fetched data
        setData(res[currency]);
      })
      .catch((error) => {
        // Handle errors if fetching data fails
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
