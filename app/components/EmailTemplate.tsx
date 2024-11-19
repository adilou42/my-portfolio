import React from 'react';

interface EmailTemplateProps {
  children: React.ReactNode;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default EmailTemplate;