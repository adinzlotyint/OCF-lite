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
            123 Green Street, Suite 456
            <br />
            Sustainability City, SC 78910
            <br />
            Poland
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-md font-roboto font-semibold">Email:</h2>
          <p className="text-sm font-roboto text-gray-700">
            koszm593@gmail.com
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-md font-roboto font-semibold">Phone:</h2>
          <p className="text-sm font-roboto text-gray-700">+1 (234) 567-8901</p>
        </div>

        <div className="mt-4">
          <h2 className="text-md font-roboto font-semibold">GitHub:</h2>
          <a
            href="https://github.com/adinzlotyint"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-roboto text-blue-500 hover:underline"
          >
            github.com/adinzlotyint
          </a>
        </div>

        <div className="mt-4">
          <h2 className="text-md font-roboto font-semibold">LinkedIn:</h2>
          <a
            href="https://www.linkedin.com/in/adrian-zi%C4%99tek-440366177/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-roboto text-blue-500 hover:underline"
          >
            linkedin.com/in/adrian-zietek
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
