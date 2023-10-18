import { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { data } = response.data;

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProfileData();
  }, []);

  return (
    <section className="flex justify-center items-center py-8 min-h-screen w-full">
      <form className="bg-slate-100 shadow-md rounded text-lg px-8 pt-6 pb-8 mb-4">
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default MyProfile;
