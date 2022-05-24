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

  const getTypeValue = typesOptions.find((item) => item.key === type)?.label;
  const getSortValue = sortsOptions.find((item) => item.key === sort)?.label;
  const getDirectionsValue = directionsOptions.find((item) => item.key === direction)?.label;

  return (
    <div className="flex flex-col rounded-md bg-zinc-800 p-2">
      <div className="pb-2 text-lg">Filter</div>
      <div className="flex flex-wrap items-center gap-4">
        <Select
          label="Type"
          value={getTypeValue}
          options={typesOptions}
          onChange={(option) => handleChange('type', option.key)}
          renderItem={({ option }) => <span>{option.label}</span>}
        />
        <Select
          label="Sort"
          value={getSortValue}
          options={sortsOptions}
          onChange={(option) => handleChange('sort', option.key)}
          renderItem={({ option }) => <span>{option.label}</span>}
        />
        <Select
          label="Direction"
          value={getDirectionsValue}
          options={directionsOptions}
          onChange={(option) => handleChange('direction', option.key)}
          renderItem={({ option }) => <span>{option.label}</span>}
        />
      </div>
    </div>
  );
}
