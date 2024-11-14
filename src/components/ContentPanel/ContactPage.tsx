const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col h-full p-6 bg-white 2xl:ml-4 ml-0 sm:ml-8 sm:mr-8 mr-0 sm:rounded-2xl rounded-none shadow-lg hover:shadow-xl transition-all">
        <p className="text-lg font-roboto font-bold">
          Contact Us
          <span className="block text-xs font-roboto text-tetriary font-normal">
            Get in touch for any questions or feedback
          </span>
        </p>

        <div className="mt-4">
          <h2 className="text-md font-roboto font-semibold">Emails:</h2>
          <a
            href="mailto:katarzyna.polikowska@bureauveritas.com"
            className="text-sm font-roboto text-blue-500 hover:underline"
          >
            katarzyna.polikowska@bureauveritas.com
          </a>{" "}
          <br />
          <a
            href="mailto:adrian.zietek@bureauveritas.com"
            className="text-sm font-roboto text-blue-500 hover:underline"
          >
            adrian.zietek@bureauveritas.com
          </a>{" "}
          <br />
          <a
            href="mailto:anna.ostapczenia@bureauveritas.com"
            className="text-sm font-roboto text-blue-500 hover:underline"
          >
            anna.ostapczenia@bureauveritas.com
          </a>
        </div>

        <div className="mt-4">
          <h2 className="text-md font-roboto font-semibold">
            Address:{" "}
            <span className="block text-xs font-roboto text-tetriary font-normal">
              BUREAU VERITAS POLSKA SP. Z O.O. - Migdałowa 4, 02-796 Warsaw,
              Poland
            </span>
          </h2>
        </div>
        <div className="flex-grow mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.305066666182!2d21.055807277308062!3d52.14696157196576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192d7bc7feecab%3A0x71bdaac974bb02bc!2sBureau%20Veritas%20Polska!5e0!3m2!1sen!2spl!4v1729596243191!5m2!1sen!2spl"
            className="w-full h-full"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-4">
          <p className="text-lg font-roboto font-bold">
            Privacy policy
            <span className="block text-xs font-roboto text-tetriary font-normal">
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
