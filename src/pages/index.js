import { useState } from 'react';
import Head from 'next/head';

import useQuery from '@/hooks/use-query.hook';
import useOnScreen from '@/hooks/use-on-screen';

import { sorts, types, directions } from '@/constants/filter';

import Header from '@/components/Header';
import Filter from '@/components/Filter';
import List from '@/components/List';
import LoadMore from '@/components/LoadMore';

export default function Home() {
  const { isVisible, containerRef } = useOnScreen();
  const [filter, setFilter] = useState({
    type: types.all.key,
    sort: sorts.created.key,
    direction: directions.desc.key,
  });

  const { data, isLoading, isLoadingMore, isError, isEmpty, isReachingEnd } = useQuery({
    filter,
    isVisible,
  });

  return (
    <>
      <Head>
        <title>Meta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="px-2 text-zinc-50">
        <div className="py-2 text-xl text-zinc-400">Repositories</div>
        <div className="flex flex-col gap-3">
          <Filter data={filter} onChange={(value) => setFilter(value)} />
          <List data={data} loading={isLoading} error={isError} isEmpty={isEmpty} />
          <LoadMore
            containerRef={containerRef}
            loading={isLoading}
            isLoadingMore={isLoadingMore}
            error={isError}
            isReachingEnd={isReachingEnd}
          />
        </div>
      </main>
    </>
  );
}
