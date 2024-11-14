import Logo from "../assets/Logo.tsx";

const LogoComponent = () => {
  return (
    <div className="flex flex-col bg-white mb-8 xl:mb-0 mt-8 xl:mr-4 sm:mr-[25%] mr-0 xl:ml-8 sm:ml-[25%] ml-0 p-4 rounded-none sm:rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className="w-full rounded-xl bg-[#00049E] flex justify-center h-[200px]">
        <Logo className="h-full"/><br/>
      </div>
    </div>
  );
};

export default LogoComponent;