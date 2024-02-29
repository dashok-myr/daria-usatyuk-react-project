interface IRadioProps<TValue> {
  value: TValue;
  label: string;
  checked: boolean;
  onChange: (value: TValue) => void;
}
export default function Radio<TValue extends string>({
  label,
  value,
  checked,
  onChange,
}: IRadioProps<TValue>) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={`default-radio-${value}`}
        type="radio"
        value={value}
        name={`default-radio-${value}`}
        checked={checked}
        onChange={(event) => {
          onChange(event.currentTarget.value as TValue);
        }}
        className="w-4 h-4 bg-gray-100"
      />
      <label
        htmlFor={`default-radio-${value}`}
        className="ms-2 text-sm font-light text-gray-400"
      >
        {label}
      </label>
    </div>
  );
}
