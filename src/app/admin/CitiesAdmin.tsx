'use client';

import { Input } from '@/src/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { citiesValidationSchema } from '@/src/helpers/validationSchema';
import { z } from 'zod';
import { citiesAddAction } from '@/src/actions/cities';

type CitiesForm = z.infer<typeof citiesValidationSchema>;

type props = {
  cities: {
    id: string;
    name: string;
  }[];
};

const CitiesAdmin = ({ cities }: props) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<CitiesForm>({ resolver: zodResolver(citiesValidationSchema) });
  const onSubmit: SubmitHandler<CitiesForm> = async (data) => {
    try {
      await citiesAddAction(data);
      resetField('country');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto flex flex-col max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Country"
          placeholder="Country"
          hookForm={register('country', { required: true })}
          error={!!errors.country}
          errorMessage={errors.country?.message}
        />
      </form>
      <select id="country" name="country" required defaultValue="">
        <option value="" disabled>
          Select a country
        </option>
        {cities?.map((el) => {
          return (
            <option value={el.id} key={Math.random()}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CitiesAdmin;
