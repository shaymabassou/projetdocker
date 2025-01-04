'use client';
import React , { Suspense }from 'react';
import UpdateFacturationForm from '../components/Facturation/UpdateFacturationForm';


const UpdateFacturationPage: React.FC = () => {
   return (
     <Suspense fallback={<div>Loading...</div>}>
      <UpdateFacturationForm />
    </Suspense>
  );
};

export default UpdateFacturationPage;
