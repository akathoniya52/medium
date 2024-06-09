import { SignUpInput } from "@akathoniya52/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const Navigate = useNavigate()
  const [postInput, setPostInput] = useState<SignUpInput>({
    name: "",
    username: "",
    password: "",
  });
  console.log(postInput);

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signin"?"signin":"signup"}`,postInput)
      const jwt = response.data;
      localStorage.setItem('token',jwt);
      Navigate("/blogs")
    } catch (error) {
      // alert the user when request failed
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="">
          <div className="px-10">
            <div className="text-xl font-semibold text-center">
              {type === "signin" ? "Sign In " : "Create an Account"}
            </div>
            <div className="text-slate-500">
              {type === "signin"
                ? "Don't have Account ?"
                : "Already Have and Account ?"}
              <Link
                to={`${type === "signin" ? "/signup" : "/signin"}`}
                className="underline pl-2"
              >
                {type === "signup" ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>
          <div>
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Amit Patel..."
                onChange={(e) => {
                  setPostInput((c) => ({
                    ...c,
                    name: e.target.value,
                  }));
                }}
              />
            )}

            <LabelledInput
              label="Username"
              placeholder="amit@gmail.com"
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />

            <LabelledInput
              label="Password"
              placeholder="123456"
              type="password"
              onChange={(e) => {
                setPostInput((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
          </div>
          <button
          onClick={sendRequest}
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm mt-8 text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full "
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white pt-4"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
