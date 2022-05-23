import { useState, useRef } from 'react';

import useOnClickOutside from '@/hooks/use-on-click-outside.hook';

import clsx from 'clsx';

const Select = (props) => {
  const {
    label,
    disabled,
    className,
    options = [],
    value,
    renderItem,
    onChange,
    onFocus,
    onBlur,
  } = props;
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(ref, () => setIsOpen(false));

  const handleToggle = () => setIsOpen((prevState) => !prevState);

  const handleSelect = (option, index) => {
    onChange(option, index);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-[2px]">
      {label && <label className="text-sm text-gray-400">{label}</label>}
      <div ref={ref} className="relative w-full">
        <button
          aria-label={label}
          disabled={disabled}
          className={clsx(
            'flex items-center justify-between',
            'w-full px-3 py-2',
            'rounded-lg border border-gray-500 bg-zinc-900',
            'text-gray-300',
            'group hover:border-zinc-600 focus:border-zinc-600 focus:outline-none',
            `${disabled ? 'cursor-not-allowed text-gray-300' : ''}`,
            `${className}`
          )}
          onClick={handleToggle}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          <span className="truncate pr-2">{value === '' ? '請選擇' : value}</span>
          <span className={`${disabled ? '' : 'group-hover:text-zinc-600'}`}>
            {isOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-zinc-300"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-zinc-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            )}
          </span>
        </button>

        {isOpen && (
          <ul
            className={clsx(
              'absolute z-10 max-h-56 w-full min-w-[200px]',
              'mt-1 py-2',
              'rounded-lg border border-zinc-600 bg-zinc-900 shadow-lg',
              'overflow-auto focus:outline-none'
            )}
          >
            {options.map((option, index) => (
              <li
                className={clsx(
                  'relative flex flex-wrap items-center',
                  'mx-2 p-2',
                  'rounded-lg text-sm text-zinc-50',
                  'cursor-pointer',
                  'hover:bg-zinc-600 hover:text-white'
                )}
                key={`${index.toString()}`}
                onClick={() => handleSelect(option, index)}
              >
                {renderItem({ option })}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Select;
