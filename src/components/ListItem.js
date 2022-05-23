import Link from '@/components/Link';

export default function ListItem(props) {
  const { data } = props;
  const { name, html_url, description, language, license, visibility, updated_at } = data;

  return (
    <li className="border-b border-zinc-600 p-3">
      <div className="flex items-center gap-2">
        <Link href={html_url} className="text-lg font-bold text-blue-400">
          {name}
        </Link>
        <div className="rounded-full border border-zinc-700 px-2 text-zinc-300">{visibility}</div>
      </div>
      <p className="text-zinc-400">{description}</p>
      <div className="flex items-center gap-4 pt-2 text-sm text-zinc-400">
        {language && <span>{language}</span>}
        {license?.name && <span>{license?.spdx_id}</span>}
        {updated_at && <span>Update on {new Date(updated_at).toLocaleDateString()}</span>}
      </div>
    </li>
  );
}
