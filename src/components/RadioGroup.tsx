import Radio from "./Radio.tsx";

interface IOption<TValue> {
  value: TValue;
  label: string;
}

interface IRadioGroupsProps<TValue> {
  title: string;
  value: TValue;
  options: readonly IOption<TValue>[];
  onChange: (value: TValue) => void;
}

export default function RadioGroup<TValue extends string>({
  title,
  value,
  options,
  onChange,
}: IRadioGroupsProps<TValue>) {
  return (
    <div className="flex flex-col gap-2 font-semibold">
      <p>{title}</p>
      <div className="flex gap-3">
        {options.map((option) => {
          const isSelected = option.value === value;
          return (
            <Radio<TValue>
              key={option.value}
              label={option.label}
              value={option.value}
              checked={isSelected}
              onChange={onChange}
            />
          );
        })}
      </div>
    </div>
  );
}
