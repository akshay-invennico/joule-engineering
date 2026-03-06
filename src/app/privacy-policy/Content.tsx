import React from 'react';

const Content = () => {
  const heading = 'text-[#1D1D1B] text-2xl font-semibold leading-[28px] my-6';

  return (
    <div className="p-6 sm:p-12 text-[#67696B]">
      <h1 className={heading}>Information We Collect</h1>

      <p>
        We may collect personal information such as name, email address, phone
        number, company name, and inquiry details when users submit forms.
      </p>

      <p>
        We may also collect technical information including IP address, browser
        type, device information, pages visited, and time spent on the website.
      </p>

      <h1 className={heading}>How We Use Your Information</h1>

      <p>
        The information collected is used to respond to inquiries, provide
        service information, improve website performance, communicate with
        clients, and maintain internal records.
      </p>

      <h1 className={heading}>Cookies</h1>

      <p>
        Our website may use cookies to enhance user experience, understand
        website traffic, and improve overall website performance. Users can
        choose to disable cookies through their browser settings if they prefer
        not to allow them.
      </p>

      <h1 className={heading}>Data Protection</h1>

      <p>
        We take reasonable measures to protect user information from
        unauthorized access, data loss, or misuse. However, it is important to
        note that no method of internet transmission or electronic storage is
        completely secure.
      </p>

      <h1 className={heading}>Third-Party Services</h1>

      <p>
        Our website may use third-party services such as analytics tools,
        hosting providers, or form processing tools. These services may collect
        limited data necessary to perform their functions and improve the
        website experience.
      </p>

      <h1 className={heading}>External Links</h1>

      <p>
        Our website may contain links to other websites for additional
        information. We are not responsible for the privacy practices or
        content of external websites.
      </p>

      <h1 className={heading}>Updates to This Policy</h1>

      <p>
        Joule Engineering Works may update this Privacy Policy from time to
        time. Any changes will be posted on this page so users are encouraged to
        review it periodically.
      </p>

      <h1 className={heading}>Contact Us</h1>

      <p>
        Joule Engineering Works <br />
        Website: https://jouleengineeringworks.com <br />
        Email: joule.engg@gmail.com
      </p>
    </div>
  );
};

export default Content;