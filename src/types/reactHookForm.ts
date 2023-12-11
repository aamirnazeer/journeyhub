import { ChangeHandler, RefCallBack } from 'react-hook-form';

export type hookFormT = {
  onChange: ChangeHandler;
  name: string;
  onBlur: ChangeHandler;
  ref: RefCallBack;
};
