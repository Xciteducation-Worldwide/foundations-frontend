import axios from "axios";
import React, { useEffect, useState } from "react";

export const Admin = () => {
  const [volunteerlist, setVolunteerlist] = useState();
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/getVolunteerFormData");
      setVolunteerlist(res.data.getdata);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const decline = async (userId) => {
    try {
      const res = await axios.put(
        "http://localhost:8000/updateVolunteerformdata",
        {
          userId,
          status: "Declined",
        }
      );
      console.log(res.data);
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

  const approve = async (userId) => {
    try {
      const res = await axios.put(
        "http://localhost:8000/updateVolunteerformdata",
        {
          userId: userId,
          status: "Approved",
        }
      );
      console.log(res.data);
      getData();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="admin text-center">
      <h2 className="text-2xl title-font font-bold text-violet-900 font-medium text-gray-900 title-font my-2 my-4 text-center">
        VOLUNTEER LIST
      </h2>
      <section className="text-gray-600 body-font overflow-hidden">
        {volunteerlist &&
          volunteerlist.map((data, index) => (
            <div className="container px-5 pb-6 mx-auto" key={index}>
              <div className=" text-left text-gray-800">
                <div className="px-2  grid flex-wrap md:flex-nowrap bg-indigo-100 rounded-xl lg:px-4 lg:pb-4 pt-2">
                  <div className="md:flex-grow">
                    <h2 className="text-xl font-medium text-gray-800 title-font  mb-2 pb-2 text-center border-b border-gray-400">
                      Volunteer {index + 1}
                    </h2>
                    <p className="text-sm font-medium leading-relaxed">
                      NAME : <span className="span">{data.name}</span>
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      EMAIL : <span className="span">{data.email}</span>
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      PHONE : <span className="span">{data.phone}</span>
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      ADDRESS :{" "}
                      <span>
                        City : {data.city} , State : {data.state} , Zip :
                        {data.zip}
                      </span>
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      STATUS : <span className="span">{data.status}</span>
                    </p>
                  </div>
                  <div className="flex pb-4 lg:pb-2">
                    <button
                      type="button"
                      onClick={() => approve(data._id)}
                      className="w-1/8 mt-2 text-white bg-emerald-500 hover:bg-emerald-700 focus:ring-4 focus:ring-green-900 font-medium rounded-lg text-sm px-2  text-center mr-2"
                    >
                      APPROVE <i class="fas fa-check text-emerald-100 ml-1"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => decline(data._id)}
                      className="w-1/8 mt-2 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2"
                    >
                      DECLINE<i class="fas fa-times text-red-100 ml-2"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};
