import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col h-full p-6 bg-white 2xl:ml-4 ml-0 sm:ml-8 sm:mr-8 mr-0 sm:rounded-2xl rounded-none shadow-lg hover:shadow-xl transition-all">
        <p className="text-lg font-roboto font-bold">
          Contact details
          <span className="block text-xs font-roboto text-gray-500 font-normal">
            Contact us for any questions or feedback
          </span>
        </p>
      </div>
    </>
  );
};

export default ContactPage;
