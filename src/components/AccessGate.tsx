import { useState } from "react";
import bvLogoBlack from "../assets/bv-logo-black.png";

const ACCESS_CODE = "123";

interface Props {
  onUnlock: () => void;
}

const AccessGate = ({ onUnlock }: Props) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ACCESS_CODE) {
      onUnlock();
    } else {
      setError(true);
      setCode("");
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary">
      <div className="flex flex-col items-center gap-6 bg-white rounded-2xl shadow-2xl p-10 w-full max-w-sm mx-4">
        <img src={bvLogoBlack} alt="Bureau Veritas" className="w-40 h-auto" />

        <div className="text-center">
          <h1 className="text-xl font-bold font-roboto text-gray-800">
            Access Required
          </h1>
          <p className="text-sm font-roboto text-gray-500 mt-1">
            Enter your access code to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <input
            type="password"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError(false);
            }}
            placeholder="Access code"
            className={`input input-bordered w-full font-roboto ${
              error ? "input-error" : ""
            }`}
            autoFocus
          />
          {error && (
            <p className="text-xs font-roboto text-red-500 text-center">
              Incorrect code. Please try again.
            </p>
          )}
          <button type="submit" className="btn bg-primary text-white w-full font-roboto hover:opacity-90">
            Enter
          </button>
        </form>

        <div className="text-center text-xs font-roboto text-gray-400">
          <p>Don't have a code? Contact us:</p>
          <a
            href="mailto:adrian.zietek@bureauveritas.com"
            className="text-blue-500 hover:underline"
          >
            adrian.zietek@bureauveritas.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccessGate;
