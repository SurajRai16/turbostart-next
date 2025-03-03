interface Props {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

const FormInput = ({ type, name, placeholder, className }: Props) => {
  return (
    <div className={`${className} mt-4`}>
      <input
        className="w-full bg-black border border-gray-800 p-4"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
