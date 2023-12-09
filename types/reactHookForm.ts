import { ChangeHandler, RefCallBack } from 'react-hook-form';

export interface hookFormI {
  onChange: ChangeHandler;
  name: string;
  onBlur: ChangeHandler;
  ref: RefCallBack;
}
