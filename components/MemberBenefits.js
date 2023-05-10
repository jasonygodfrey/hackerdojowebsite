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
      }}
    >
      <img
        src="/images/memberbenefits.png"
        alt="Member Benefits"
        style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
      />
    </div>
  );
};

export default MemberBenefits;

