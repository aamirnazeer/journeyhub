import classNames from 'classnames';
import { ButtonI } from '@/src/components/Button/ButtonI';

const Button = ({
  type = 'submit',
  label = 'Button',
  disabled = false,
}: ButtonI) => {
  return (
    <button
      disabled={disabled}
      className={classNames({
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded':
          true,
        'opacity-50 cursor-not-allowed': disabled,
      })}
      type={type}
    >
      {label}
    </button>
  );
};

export { Button as default };
