import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FamilyInfoFormProps {
  onSubmit: (data: any) => void;
  onPrev: () => void;
}

const FamilyInfoForm: React.FC<FamilyInfoFormProps> = ({ onSubmit, onPrev }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{
    familyMembers: string[];
  }>();
  const [familyMembers, setFamilyMembers] = useState<string[]>(['']); // Array to store family member names

  const onSubmitForm = (data: any) => {
    onSubmit({ ...data, familyMembers });
  };

  const handleAddMember = () => {
    setFamilyMembers([...familyMembers, '']); // Initialize new family members with an empty string
  };

  const handleRemoveMember = (index: number) => {
    const updatedMembers = [...familyMembers];
    updatedMembers.splice(index, 1);
    setFamilyMembers(updatedMembers);
  };

  const handleFamilyMemberChange = (index: number, value: string) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index] = value;
    setFamilyMembers(updatedMembers);
  };

  return (
    <div className='flex flex-col w-screen h-screen justify-evenly items-center'>
        <h1 className="font-bold text-[26px] text-white">Family Data Entry Form</h1>
        <form className='flex flex-col w-[610px] h-auto justify-between mb-20' onSubmit={handleSubmit(onSubmitForm)}>
        {familyMembers.map((member, index) => {
            return (
                <div className='flex flex-col mb-10'>
                <div key={index} className='flex w-full justify-between mb-10'>
                <input
                    className='border h-[40px] w-[290px] px-1 rounded-md text-black'
                    {...register(`familyMembers.${index}` as const, { required: true })}
                    placeholder="Family Member Name"
                    value={member}
                    onChange={(e) => handleFamilyMemberChange(index, e.target.value)}
                />
                <button className = "bg-red-500 h-[40px] w-[150px] rounded-md" type="button" onClick={() => handleRemoveMember(index)}>Remove</button>
                <button className = "bg-btn h-[40px] w-[150px] rounded-md" type="button" onClick={handleAddMember}>Add More Members</button>
                </div>
                {errors.familyMembers && errors.familyMembers[index] && <span className='text-red-400'>This field is required</span>}
            </div>
            )
        })}
       <div className='flex justify-between w-1/2'>
            <button className = "bg-btn h-[40px] w-[150px] rounded-md" type="button" onClick={handleAddMember}>Add More Members</button>
            <button className = "bg-submitBtn h-[40px] w-[150px] rounded-md" type="submit">Submit</button>
       </div>
       <button className = "absolute right-2 bottom-10 bg-btn h-[40px] w-[150px] rounded-md" type="button" onClick={onPrev}>Previous</button>
        </form>
    </div>
  );
};

export default FamilyInfoForm;
