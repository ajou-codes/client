interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

function Input({ label, id, ...rest }: InputProps) {
  return (
    <>
      <label
        htmlFor={id}
        className="mt-3 block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type="text"
        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
        id={id}
        {...rest}
      />
    </>
  );
}

export default Input;
