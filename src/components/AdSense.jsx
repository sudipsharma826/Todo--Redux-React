import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    const adContainer = document.querySelector('.adsbygoogle');
    
    // Clear existing ads to prevent duplicate pushes
    if (adContainer) {
      adContainer.innerHTML = '';
    }

    // Initialize AdSense
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading AdSense:', error);
    }
  }, []); // Runs only once after the component mounts

  return (
    <div className="ad-container my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={import.meta.env.VITE_data_ad_client}
        data-ad-slot={import.meta.env.VITE_data_ad_slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSense;
