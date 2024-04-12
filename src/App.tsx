import React, { useState } from 'react';
import UserInfoForm from './UserInfoForm';
import FamilyInfoForm from './FamilyInfoForm';

const App: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<any>(null);
  const [familyData, setFamilyData] = useState<any>(null);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleUserInfoNext = (data: any) => {
    setUserData(data);
    setStep(2);
  };

  const handleFamilyInfoSubmit = (data: any) => {
    setFamilyData(data);
    setSubmittedData({ ...userData, ...data });
    console.log("Submitted data:", { ...userData, ...data });
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div className='bg-dark-1 h-auto text-white'>
      {step === 1 && <UserInfoForm onNext={handleUserInfoNext} userData={userData} />}
      {step === 2 && <FamilyInfoForm onSubmit={handleFamilyInfoSubmit} onPrev={() => setStep(1)} />}
      
      {/* {step !== 1 && <button className = " absolute right-1 bg-btn h-[40px] w-[150px] rounded-md" onClick={handlePrev}>Previous</button>} */}
      {/* {step === 2 && <button onClick={() => console.log("Add More Members button clicked")}>Add More Members</button>} */}
      
      {submittedData && (
        <div className='h-[300px] flex flex-col justify-evenly pl-10 pb-10'>
          <h1 className="font-bold text-[22px]">Submitted Data:</h1>
          <p><b className='text-[18px]'>First Name: </b>{submittedData.firstName}</p>
          <p><b className='text-[18px]'>Last Name:</b> {submittedData.lastName}</p>
          <p><b className='text-[18px]'>Parent Names:</b> {submittedData.parentNames}</p>
          <p><b className='text-[18px]'>Phone Number:</b> {submittedData.phoneNumber}</p>
          <p><b className='text-[18px]'>Email: </b>{submittedData.email}</p>
          <p><b className='text-[18px]'>Address: </b>{submittedData.address}</p>
          <p><b className='text-[18px]'>Family Members:</b></p>
          <ul>
            {submittedData.familyMembers.map((member: string, index: number) => (
              <li className='text-[18px]' key={index}>{member}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
