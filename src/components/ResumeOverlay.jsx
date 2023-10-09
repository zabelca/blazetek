import React from 'react'

const ResumeOverlay = () => {
  return (
    <div>
      <iframe
        src="/images/resume.pdf" // Display page 1 of the PDF
        width="100%"
        height="600px" // You can adjust the height as needed
        title="Resume Page 1"
      ></iframe>
    </div>
  )
}

export default ResumeOverlay