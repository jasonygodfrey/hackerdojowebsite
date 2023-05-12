import React from 'react';

const MemberBenefits = () => {
  return (
    <div 
      className="image-container" 
      style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'black', 
        paddingTop: '50px',
        flexDirection: 'column', // Align children vertically
      }}
    >
      <h2 style={{ textAlign: 'center', width: '100%' }}>MEMBER BENEFITS </h2>
      <img
        src="/images/memberbenefitsx.png"
        alt="Member Benefits"
        style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
      />


    </div>
  );
};

export default MemberBenefits;
