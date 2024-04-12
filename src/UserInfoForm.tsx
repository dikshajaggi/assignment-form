import React from 'react';
import { useForm } from 'react-hook-form';

interface UserInfoFormProps {
  onNext: (data: any) => void;
  userData: any;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onNext, userData }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: userData // Initialize form fields with userData
  });

  const onSubmit = handleSubmit((data) => {
    onNext(data);
    reset(); // Reset the form
  });

  return (
 <div className='flex flex-col w-screen h-screen justify-evenly items-center'>
      <h1 className="font-bold text-[26px] text-white">Data Entry Form</h1>
     <form className='flex flex-col w-[610px] h-[400px] justify-between mb-20' onSubmit={onSubmit}>

      <div className='flex w-full justify-between'>
        <div className='flex flex-col'>
          <input className='border h-[40px] w-[290px] px-1 rounded-md text-black' {...register("firstName", { required: true })} placeholder="First Name" />
          {errors.firstName && <span className='text-red-400'>This field is required</span>}
        </div>
        <div className='flex flex-col'>
          <input className='border h-[40px] w-[290px] px-1 rounded-md text-black' {...register("lastName", { required: true })} placeholder="Last Name" />
          {errors.lastName && <span className='text-red-400'>This field is required</span>}
        </div>
      </div>
      
      <div className='flex w-full justify-between'>
       <div className='flex flex-col'>
          <input className='border h-[40px] w-[290px] px-1 rounded-md text-black' {...register("parentNames", { required: true })} placeholder="Parent Name" />
          {errors.parentNames && <span className='text-red-400'>This field is required</span>}
       </div>
        <div className='flex flex-col'>
          <input className='border h-[40px] w-[290px] px-1 rounded-md text-black' {...register("phoneNumber", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Phone Number" />
          {errors.phoneNumber && <span className='text-red-400'>Please enter a valid 10 digit phone no.</span>}
        </div>
      </div>

      <div className='flex flex-col'>
          <input className='border h-[40px] w-[600px] px-1 rounded-md text-black' {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
          {errors.email && <span className='text-red-400'>Please enter a valid email address</span>}
      </div>
      <div className='flex flex-col'>
        <input className='border h-[40px] w-[600px] px-1 rounded-md text-black' {...register("address", { required: true })} placeholder="Address" />
        {errors.address && <span className='text-red-400'>This field is required</span>}
      </div>

      <div className='absolute bottom-0 right-2 flex w-[310px] justify-between mb-10'>
     <button className = "bg-btn h-[40px] w-[150px] rounded-md" type="button">Previous</button>
     <button className = "bg-btn h-[40px] w-[150px] rounded-md" type="submit">Next</button>
   </div>
   
    </form>
     
 </div>
  );
};

export default UserInfoForm;
