import ConfigPanel from "../../assets/ConfigPanel.svg";

const ManualPage = () => {
  return (
    <>
      <div className="flex flex-col h-full p-6 bg-white 2xl:ml-4 ml-0 sm:ml-8 sm:mr-8 mr-0 sm:rounded-2xl rounded-none shadow-lg hover:shadow-xl transition-all">
        <p className="text-lg font-roboto font-bold">
          Manual
          <span className="block text-xs font-roboto text-gray-500 font-normal">
            User instructions and best practices
          </span>
        </p>
        <div className="collapse-title text-lg font-bold font-roboto pl-0">
          Configuration Panel
        </div>
        <div className="join join-vertical w-full font-roboto bg-primary text-white">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              Custom Drop-Down Content
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              Import Custom Data
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              Add Optional Details
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="collapse-title text-lg font-bold font-roboto pl-0">
          Data Table
        </div>
        <div className="join join-vertical w-full font-roboto bg-primary text-white">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              Data input section
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-lg font-medium">
              Table - data structure and utilities
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManualPage;
