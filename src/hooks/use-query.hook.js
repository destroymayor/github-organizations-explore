import { useState, useEffect } from 'react';

import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

const GITHUB_ORGS_URL = 'https://api.github.com/orgs';
const ORGANIZATION = `facebook`;

export default function useQuery({ filter, isVisible }) {
  const [results, setResults] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const url = `${GITHUB_ORGS_URL}/${ORGANIZATION}/repos`;

  // format filter params
  const filterParams = Object.keys(filter)
    .map((key) => `${key}=${filter[key]}`)
    .join('&');

  const { data, error } = useSWR(`${url}?page=${pageNum}&${filterParams}&per_page=10`, fetcher, {
    revalidateOnFocus: false,
  });

  const isError = !!error;
  const isLoading = !data && !isError;
  const isEmpty = results?.[0]?.length === 0;
  const isLoadingMore =
    isLoading || (pageNum > 0 && results && typeof results[pageNum - 1] === 'undefined');

  const isReachingEnd = isEmpty || (pageNum > 0 && data && data?.length === 0);

  // reset results and pageNum when filter changes
  useEffect(() => {
    if (filterParams) {
      setPageNum(1);
      setResults([]);
    }
  }, [filterParams]);

  useEffect(() => {
    if (!isLoading && !isLoadingMore && !isReachingEnd && isVisible) {
      setPageNum((prev) => prev + 1);
    }
  }, [isReachingEnd, isVisible]);

  useEffect(() => {
    if (data && !isLoading && !isError) {
      setResults((prevState) => [...prevState, data]);
    }
  }, [data, isError, isLoading]);

  return {
    data: results?.flat(1),
    isLoading,
    isError,
    isEmpty,
    isReachingEnd,
    isLoadingMore,
  };
}
