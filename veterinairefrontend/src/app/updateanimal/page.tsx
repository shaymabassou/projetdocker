'use client';
import React, { Suspense }  from 'react';
import UpdateAnimalForm from '../components/Animal/UpdateAnimalForm';


const UpdateAnimalPage: React.FC = () => {
   return (
    <Suspense fallback={<div>Loading...</div>}>
    <UpdateAnimalForm />
  </Suspense>
  );
};

export default UpdateAnimalPage;
