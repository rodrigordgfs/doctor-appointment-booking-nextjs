"use client";

import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    GlobalApi.getDoctors().then(({ data }) => {
      setDoctors(data);
      console.log(data);
      
    });
  };

  useEffect(() => {
    getDoctors();
  }, []);
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">Popular Doctors</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {doctors &&
          doctors.map((doctor, index) => <div key={index} className="border-[1px] hover:border-primary transition-all rounded-lg p-3 flex flex-col gap-2">
            <Image src={doctor?.Image?.url} width={500} height={200} className="h-[200px] w-full object-cover rounded-lg" />
            <div className="items-baseline flex flex-col gap-1">
                <h3 className="text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary font-semibold">{doctor?.category?.Name}</h3>
                <h3 className="font-bold">{doctor?.Name}</h3>
                <h3 className="text-primary text-sm">{doctor?.Year_Of_Experience}</h3>
                <h3 className="text-gray-500 text-sm">{doctor?.Address}</h3>
                <p className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-primary hover:text-white transition-all">Book Now</p>
            </div>
          </div>)}
      </div>
    </div>
  );
}
