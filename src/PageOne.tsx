import { useForm, SubmitHandler } from "react-hook-form";
import FormField from "./components/FormField";
import { Link } from "react-router-dom";

type Inputs = {
    firstname: string,
    lastname: string,
    fathername: string,
    mothername: string,
    phonenumber: number,
    email: string,
    address: string
};

export default function PageOne() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(errors);
        console.log(data);
    };

    // watching all inputs
    const watchAllFields = watch();

    // checking if there are any errors in the form or all the fields are empty
    const isFormValid = Object.keys(errors).length === 0 && Object.values(watchAllFields).length !== 0;

    return (
        <div className="flex flex-col justify-between items-center bg-dark-1 pt-6 h-screen">
            <h1 className="font-bold text-[26px] text-white">Data Entry Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-evenly h-[600px] w-[600px]">
                <div className="flex justify-between w-full">
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
                </div>
            </form>
            <div className="w-[210px] flex justify-between absolute bottom-0 right-2 pb-6">
                <Link to="/page-one"><button className="bg-btn h-[40px] w-[100px] font-semibold text-white rounded-md" disabled={!isFormValid}>Prev</button></Link>
                <Link to="/page-two"><button className="bg-btn h-[40px] w-[100px] font-semibold text-white rounded-md" disabled={!isFormValid}>Next</button></Link>
            </div>
        </div>
    );
}
