const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col h-full p-6 bg-white 2xl:ml-4 ml-0 sm:ml-8 sm:mr-8 mr-0 sm:rounded-2xl rounded-none shadow-lg hover:shadow-xl transition-all">
        <p className="text-lg font-roboto font-bold">
          Contact Us
          <span className="block text-xs font-roboto text-gray-500 font-normal">
            Get in touch for any questions or feedback
          </span>
        </p>

        <div className="mt-4">
          <a
            href="mailto:adrian.kamil.zietek@gmail.com"
            className="text-sm font-roboto text-blue-500 hover:underline"
          >
            adrian.zietek@bureauveritas.com
          </a>{" "}
        </div>

        <div className="mt-4">
          <h2 className="text-md font-roboto font-semibold">
            Address:{" "}
            <span className="block text-xs font-roboto text-gray-500 font-normal">
              Katowice, Poland
            </span>
          </h2>
        </div>
        <div className="flex-grow mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139679.9241935109!2d18.92558242972452!3d50.21395861631115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce2336a1ccd1%3A0xb9af2a350559fabb!2sKatowice!5e1!3m2!1spl!2spl!4v1746431949591!5m2!1spl!2spl"
            className="w-full h-full"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4">
          <p className="text-lg font-roboto font-bold">
            Privacy policy
            <span className="block text-xs font-roboto text-gray-500 font-normal">
              We respect your privacy. Any information you enter will be
              securely stored in your browser's local storage, ensuring that
              your data is available when you return. <br /> Rest assured, none
              of your information will be shared or transmitted.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
