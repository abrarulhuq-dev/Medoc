import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/Doctorcontext'
import { useEffect } from 'react'
import { AppContext } from '../../context/Appcontext'
import { assets } from '../../assets/assets_admin/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Allappointments = () => {

  const {dtoken, appointment, getappointment,cancelappoint, backendurl} = useContext(DoctorContext)
  const {Currency, calculateage, slotDateFormat} = useContext(AppContext)


  const appointmentcomplete = async (appointmentId) => {

        try {

            const { data } = await axios.post(backendurl + "/api/doctor/completed-appointment", { appointmentId }, { headers: { dtoken } })

            if (data.success) {
                toast.success(data.message)
                getappointment()
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)

        }


    }


  useEffect(()=>{

    if (dtoken) {
      
      getappointment()
    }

  },[dtoken])

  return (
     <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[50vh]   ">
        <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {appointment.reverse().map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={item.userData.image}
                alt=""
              />{" "}
              <p>{item.userData.name}</p>
            </div>
            <div>
              <p className="text-xs inline border border-primary px-2 rounded-full">
                {item.payment ? "Online" : "CASH"}
              </p>
            </div>
            <p className="max-sm:hidden">{calculateage(item.userData.dob)}</p>
            <p>
              {slotDateFormat(item.slotDate)}, {item.slotsTime}
            </p>
            <p>
              {Currency}
              {item.amount}
            </p>
            {item.cancel ? (
              <p className="text-red-400 text-xs font-medium">Cancelled</p>
            ) : item.iscompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <div className="flex">
                <img
                  onClick={() => cancelappoint(item._id)}
                  className="w-10 cursor-pointer"
                  src={assets.cancel_icon}
                  alt=""
                />
                <img
                  onClick={() => appointmentcomplete(item._id)}
                  className="w-10 cursor-pointer"
                  src={assets.tick_icon}
                  alt=""
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Allappointments