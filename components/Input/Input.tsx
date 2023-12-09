import classNames from 'classnames';
import { InputI } from './InputI';

const Input = ({
  type = 'text',
  label = 'label',
  placeholder = '',
  error = false,
  errorMessage = '',
  hookForm,
}: InputI) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={hookForm.name}
      >
        {label}
      </label>
      <input
        className={classNames({
          'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline':
            true,
          'border-red-500 mb-3': error,
        })}
        {...hookForm}
        type={type}
        placeholder={type === 'password' ? '**********' : placeholder}
      />
      {error && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
    </div>
  );
};

export { Input as default };
