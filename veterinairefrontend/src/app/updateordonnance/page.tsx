'use client';
import React , { Suspense }from 'react';
import UpdateOrdonnanceForm  from '../components/Ordonnance/UpdateOrdonnanceForm';


const UpdateOrdonnancePage: React.FC = () => {
  return (
     <Suspense fallback={<div>Loading...</div>}>
      <UpdateOrdonnanceForm />
   </Suspense>
  );
};

export default UpdateOrdonnancePage;
