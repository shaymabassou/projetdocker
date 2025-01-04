'use client';
import React  , { Suspense }from 'react';
import UpdateMaterielConsommableForm  from '../components/MaterielConsommable/UpdateMaterielConsommableForm';


const UpdateMaterielConsommablePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateMaterielConsommableForm />
   </Suspense>
  );
};

export default UpdateMaterielConsommablePage;
