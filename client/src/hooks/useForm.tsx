import { ChangeEvent, useState } from 'react';

interface Form<T> {
  handleChange: (
    props: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  form: T;
  setForm: (state: T) => void;
}

export const useForm = <T extends Object>(): Form<T> => {
  const [form, setForm] = useState<T>({} as T);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target;

    setForm({ ...form, [name]: value });
  };

  return {
    handleChange,
    form,
    setForm,
  };
};
