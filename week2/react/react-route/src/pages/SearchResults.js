import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {

  const location = useLocation();
  console.log(`location: ${location}`);

  const queryParams = new URLSearchParams(location.search);
  console.log(`location.search: ${location.search}`);

  const query = queryParams.get("query");
  useEffect(() => console.log(query), [query]); // query가 바뀔 때 마다 실행.
  return (
    <div>
      <h1>search results</h1>
      <h3>keyword: {query}</h3>
    </div>
  );
};

export default SearchResults;
