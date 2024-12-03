import React from 'react';

const Modal1 = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="gallery">
          <img className="border" style={{ borderRadius: "20px" }} src="/images/cv1.png" alt="Thumbnail 1" />
          <img className="border" style={{ borderRadius: "20px" }} src="/images/cv2.png" alt="Thumbnail 2" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default Modal1;