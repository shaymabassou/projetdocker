'use client';
import React  , { Suspense }from 'react';
import UpdateProduitAlimentaireForm  from '../components/ProduitAlimentaire/UpdateProduitAlimentaireForm';


const UpdateProduitAlimentairePage: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdateProduitAlimentaireForm />
    </Suspense>
  );
};

export default UpdateProduitAlimentairePage;
