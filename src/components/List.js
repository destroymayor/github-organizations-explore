import ListItem from '@/components/ListItem';
import ListItemSkeleton from '@/components/ListItemSkeleton';

export default function List(props) {
  const { data, loading, error, isEmpty } = props;

  if (error) return <div className="text-red-600">發生錯誤，請稍後再試</div>;

  return (
    <div className="flex flex-col rounded-md border border-zinc-600">
      <ul className="flex flex-col">
        {data?.map((item) => (
          <ListItem key={item.id + item.name} data={item} />
        ))}

        {loading && <ListItemSkeleton />}
      </ul>

      {isEmpty && <div className="p-2">No Data</div>}
    </div>
  );
}
