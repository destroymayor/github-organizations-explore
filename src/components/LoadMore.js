export default function LoadMore(props) {
  const { containerRef, error, loading, isLoadingMore, isReachingEnd } = props;

  if (error) return null;

  return (
    <div ref={containerRef} className="h-10">
      {loading && isLoadingMore && <div>Loading...</div>}
      {!loading && isReachingEnd && <div className="p-2">No more data</div>}
    </div>
  );
}
