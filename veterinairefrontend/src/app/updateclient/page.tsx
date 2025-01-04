'use client';
import React , { Suspense } from 'react';
import UpdateClientForm from '../components/Client/UpdateClientForm';

const UpdateClientPage: React.FC = () => {
   return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateClientForm />
    </Suspense>
  );
};

export default UpdateClientPage;
