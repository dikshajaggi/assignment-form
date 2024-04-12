import React from "react";
import Input from "./Input";

interface FormFieldProps {
    placeholder: string;
    name: string;
    register: any;
    label: string;
    error?: any | undefined;
    property: string;
    type: string
}

const FormField: React.FC<FormFieldProps> = ({ placeholder, name, register, error, label, property, type }) => {
    // Define default validation rules
    const validationRules: any = {};

    // If the field is required, add the required rule
    if (property === "required") {
        validationRules.required = { value: true, message: `${label} is required` };
    }

    // If the field is email, add email validation rule
    if (name === 'email') {
        validationRules.pattern = {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address"
        };
    }

    return (
        <div className="flex flex-col">
            <Input property={property} type={type} placeholder={placeholder} {...register(name, validationRules)} />
            {error && <span className="text-red-400">{error?.message}</span>}
        </div>
    );
};

export default FormField