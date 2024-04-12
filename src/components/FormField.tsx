import React from "react";

type FormValues = {
    name: string;
    email: string;
    address: string;
    phone: string;
  };

interface FormFieldProps {
    label: string;
    name: keyof FormValues;
    register: any;
    errors: any;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, register, errors }) => (
    <div className="flex flex-col">
      <label className="text-white">{label}</label>
      <input className="h-[40px] border border-gray-800 rounded-md px-2 w-[300px]" {...register(name, { required: true })} />
      {errors[name] && <span className="text-red-400">This field is required</span>}
    </div>
  );

  export default FormField
