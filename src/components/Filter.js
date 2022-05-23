import { sorts, types, directions } from '@/constants/filter';

import Select from '@/components/Select';

const typesOptions = Object.values(types);
const sortsOptions = Object.values(sorts);
const directionsOptions = Object.values(directions);

export default function Filter(props) {
  const { data, onChange } = props;
  const { type, sort, direction } = data;

  const handleChange = (name, key) => {
    onChange({ ...data, [name]: key });
  };

  return (
    <div className="flex flex-col rounded-md bg-zinc-800 p-2">
      <div className="pb-2 text-lg">Filter</div>
      <div className="flex items-center gap-4">
        <Select
          label="Type"
          value={typesOptions.find((item) => item.key === type)?.label ?? ''}
          options={typesOptions}
          onChange={(option) => handleChange('type', option.key)}
          renderItem={({ option }) => <span>{option.label}</span>}
        />
        <Select
          label="Sort"
          value={sortsOptions.find((item) => item.key === sort)?.label ?? ''}
          options={sortsOptions}
          onChange={(option) => handleChange('sort', option.key)}
          renderItem={({ option }) => <span>{option.label}</span>}
        />
        <Select
          label="Direction"
          value={directionsOptions.find((item) => item.key === direction)?.label ?? ''}
          options={directionsOptions}
          onChange={(option) => handleChange('direction', option.key)}
          renderItem={({ option }) => <span>{option.label}</span>}
        />
      </div>
    </div>
  );
}
