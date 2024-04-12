import { useForm, SubmitHandler } from "react-hook-form";
import FormField from "./components/FormField";
import { Link } from "react-router-dom";
import { useState } from "react";

type Inputs = {
    firstname: string,
    lastname: string,
    fathername: string,
    mothername: string,
    phonenumber: number,
    email: string,
    address: string
};

type FormValues = {
    name: string;
    email: string;
    address: string;
    phone: string;
  };

export default function PageOne() {
    const [step, setStep] = useState<number>(1);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>();
    
      const onSubmit: SubmitHandler<FormValues> = (data) => {
        setStep(step + 1);
        console.log(data);
      };

      const onPrev = () => {
        // Go to the previous step
        setStep(step - 1);
      };

    return (
        <div className="flex flex-col justify-between items-center bg-dark-1 pt-6 h-screen">
            <h1 className="font-bold text-[26px] text-white">Data Entry Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-evenly h-[600px] w-[600px]">
                {/* <div className="flex justify-between w-full">
                    <FormField property="small" type="text" placeholder="Enter first name" name="firstname" register={register} error={errors.firstname} label="first name" />
                    <FormField property="small" type="text" placeholder="Enter last name" name="lastname" register={register} error={errors.lastname} label="last name" />
                </div>
                <div className="flex justify-between w-full">
                    <FormField property="small" type="text" placeholder="Enter father's name" name="fathername" register={register} error={errors.fathername} label="father's name" />
                    <FormField property="small" type="text" placeholder="Enter mother's name" name="mothername" register={register} error={errors.mothername} label="mother's name" />
                </div>
                <div className="flex justify-between w-full">
                    <FormField property="small" type="number" placeholder="Enter phone number" name="phonenumber" register={register} error={errors.phonenumber} label="phone number" />
                    <FormField property="small" type="email" placeholder="Enter email" name="email" register={register} error={errors.email} label="email" />
                </div>
                <FormField property="" type="text" placeholder="Enter address" name="address" register={register} error={errors.address} label="address" />
                <div className="flex items-center w-[600px] justify-center">
                    <input type="submit" className="bg-submitBtn h-[40px] w-[200px] cursor-pointer font-semibold text-white rounded-md" />
                </div> */}
                <FormField label="Name" name="name" register={register} errors={errors} />
                <FormField label="Email" name="email" register={register} errors={errors} />
                <FormField label="Address" name="address" register={register} errors={errors} />
                <FormField label="Phone No." name="phone" register={register} errors={errors} />
            </form>
            {/* <div className="w-[210px] flex justify-between absolute bottom-0 right-2 pb-6">
                <Link to="/page-one"><button className="bg-btn h-[40px] w-[100px] font-semibold text-white rounded-md" disabled={!isFormValid}>Prev</button></Link>
                <Link to="/page-two"><button className="bg-btn h-[40px] w-[100px] font-semibold text-white rounded-md" disabled={!isFormValid}>Next</button></Link>
            </div> */}
            <div>
        <button type="button" onClick={onPrev} disabled={step === 1}>
          Previous
        </button>
        <button type="submit" disabled={Object.keys(errors).length > 0 && step === 1}>
          Next
        </button>
      </div>
        </div>
    );
}
