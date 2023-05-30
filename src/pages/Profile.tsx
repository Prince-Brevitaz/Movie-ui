import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate()
  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who Is Watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => navigate("/")}>
            <div className="group flex-row w-44 mx-auto">
              <div
                className="
                        w-44
                        h-44
                        rounded-md
                        flex
                        items-center
                        justify-center
                        border-2
                        border-transparent
                        group-hover:cursor-pointer
                        group-hover:border-white
                        overflow-hidden
                    "
              >
                <img src="src/images/default-blue.png" alt="profile"></img>
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">Prince</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
