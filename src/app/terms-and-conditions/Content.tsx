import React from 'react';

const Content = () => {
  const heading = 'text-[#1D1D1B] text-2xl font-semibold leading-[28px] my-6';

  return (
    <div className="p-6 sm:p-12 text-[#67696B]">
   

      <h1 className={heading}>Use of Website</h1>

      <p>
        This website is intended to provide information about Joule Engineering
        Works, its engineering services, products, and capabilities.
      </p>

      <p>
        By accessing this website, you agree that you will use the website only
        for lawful purposes. You must not misuse or attempt to disrupt the
        website functionality, attempt unauthorized access to any part of the
        website or systems, or reproduce and distribute website content without
        permission.
      </p>

      <h1 className={heading}>Intellectual Property</h1>

      <p>
        All content on this website including text, images, graphics, logos,
        engineering drawings, website design, and technical information is the
        property of Joule Engineering Works unless otherwise stated.
        Unauthorized reproduction, copying, or distribution of the content is
        strictly prohibited.
      </p>

      <h1 className={heading}>Information Accuracy</h1>

      <p>
        We strive to ensure that all information on the website is accurate and
        up to date. However, technical specifications, engineering details,
        service descriptions, and product information may change without prior
        notice.
      </p>

      <h1 className={heading}>Third-Party Links</h1>

      <p>
        Our website may include links to third-party websites for informational
        purposes. Joule Engineering Works does not control or endorse these
        external websites and is not responsible for their content, accuracy,
        or practices.
      </p>

      <h1 className={heading}>Limitation of Liability</h1>

      <p>
        Joule Engineering Works shall not be liable for any direct or indirect
        damages arising from the use or inability to use the website, reliance
        on website information, or any technical issues that may occur while
        accessing the website.
      </p>

      <h1 className={heading}>Confidential Information</h1>

      <p>
        Any information submitted through contact forms or emails should not
        include confidential or proprietary information unless formally agreed
        upon between the parties.
      </p>

      <h1 className={heading}>Changes to Terms</h1>

      <p>
        Joule Engineering Works reserves the right to modify or update these
        Terms and Conditions at any time without prior notice. Continued use of
        the website after changes indicates acceptance of the updated terms.
      </p>

      <h1 className={heading}>Governing Law</h1>

      <p>
        These Terms and Conditions are governed by the laws of India. Any
        disputes arising from the use of this website shall be subject to the
        jurisdiction of the appropriate courts in India.
      </p>

      <h1 className={heading}>Contact Information</h1>

      <p>
        Joule Engineering Works <br />
        Website: https://jouleengineeringworks.com <br />
        Email: joule.engg@gmail.com
      </p>
    </div>
  );
};

export default Content;