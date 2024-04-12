import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import Input from './components/Input';
import { Link } from 'react-router-dom';

const PageTwo = () => {
    type FormData = {
        familyMembers: {
            name: string;
            relation: string;
        }[];
    };

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<FormData>({
        defaultValues: {
            familyMembers: [{ name: '', relation: '' }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'familyMembers',
    });

    return (
        <div className='flex flex-col justify-between items-center bg-dark-1 pt-6 text-white h-screen'>
            <h1 className="font-bold text-[26px] text-white mb-14">Data Entry Form (Family Members)</h1>
            {fields.map((field, index) => (
                <div key={field.id} className="flex w-[700px] justify-between mb-6">
                    <Input type="text" property="small" {...register(`familyMembers.${index}.name`)} placeholder="Name" />
                    {/* {errors.familyMembers?.[index]?.name?.message && <p>{errors.familyMembers[index].name.message}</p>} */}
                    <Input type="text" property="small" {...register(`familyMembers.${index}.relation`)} placeholder="Relation" />
                    {/* {errors.familyMembers?.[index]?.relation?.message && <p>{errors.familyMembers[index].relation.message}</p>} */}
                    <button type="button" className='bg-red-400 h-[40px] w-[100px] font-semibold text-white rounded-md' onClick={() => remove(index)}>Remove</button>
                </div>
            ))}
            <button type="button" className='my-10 bg-btn h-[40px] w-[220px] font-semibold text-white rounded-md' onClick={() => append({ name: '', relation: '' })}>Add More Family Members</button>
            <button type="submit" className='mb-10 bg-submitBtn h-[40px] w-[200px] font-semibold text-white rounded-md'>Submit</button>

            <div className="w-[210px] flex justify-between absolute bottom-0 right-2 pb-6">
                <Link to="/page-one"><button className="bg-btn h-[40px] w-[100px] font-semibold text-white rounded-md">Prev</button></Link>
                <Link to="/page-two"><button className="bg-btn h-[40px] w-[100px] font-semibold text-white rounded-md">Next</button></Link>
            </div>
        </div>
    )
}

export default PageTwo
