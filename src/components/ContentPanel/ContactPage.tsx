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
          <h2 className="text-md font-roboto font-semibold">Address:</h2>
          <p className="text-sm font-roboto text-gray-700">
            BUREAU VERITAS POLSKA SP. Z O.O.
            <br />
            ul. Migdałowa 4, 02-796 Warsaw, Poland
          </p>
        </div>

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
        <p className="text-lg font-roboto font-bold mt-4">
          Privacy policy
          <span className="block text-xs font-roboto text-gray-500 font-normal">
            Find out how we use your data (We don't)
          </span>
        </p>
      </div>
    </>
  );
};

export default ContactPage;
