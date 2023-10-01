import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Appointment() {
    const navigate = useNavigate();

    const callAppointmentPage = async () => {
        try {
            const res = await fetch("http://localhost:3000/api-patient/appointments",{
                method: "GET",
                headers : {
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data);

            if(!res.status === 200)
            {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(err);
            navigate("/");
        }
    }

    useEffect(() => {
        callAppointmentPage();
    }, []);

    return (
        <>
            <h1>This is our Appointment page</h1>
            <hr className="mt-6" />
        </>
    )
}

export default Appointment
