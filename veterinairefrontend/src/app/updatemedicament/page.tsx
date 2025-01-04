'use client';
import React, { Suspense }   from 'react';
import UpdateMedicamentForm from '../components/Medicament/UpdateMedicamentForm';
// import UpdateMedicamentForm  from '../components/Medicament/UpdateMedicamentForm';


const UpdateMedicamentPage: React.FC = () => {
  return (
     <Suspense fallback={<div>Loading...</div>}>
      <UpdateMedicamentForm />
    </Suspense>
  );
};

export default UpdateMedicamentPage;
