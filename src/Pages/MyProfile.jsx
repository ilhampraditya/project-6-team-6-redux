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
    <section className="flex justify-center items-center min-h-screen w-full bg-slate-800">
      <div className="pt-40 m-5 md:pt-20 md:m-10">
        {user && (
          <div className="flex flex-col justify-center items-center bg-slate-200 rounded-md p-10">
            <img className="w-44" src="/user.png" />
            <p className="font-semibold mb-2 mt-7 italic md:text-lg xl:text-xl">
              Hello, Selamat Datang ..
            </p>
            <p className="text-4xl md:text-5xl 2xl:text-6xl font-bold ">
              {user.name}
            </p>
            <p className="text-sm md:text-lg xl:text-xl font-semibold mt-2">
              {user.email}
            </p>
            <div className="bg-slate-50 shadow-md rounded-md mt-10 p-4 max-w-4xl">
              <h5 className="text-center font-bold mb-4 md:text-xl">Biodata</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                odio perspiciatis quibusdam, sunt nulla alias placeat expedita
                fugit eum eius mollitia aspernatur ipsum ipsa voluptatem
                doloremque quam voluptatibus ex eveniet nobis culpa commodi
                accusamus fuga repudiandae eligendi. Dicta iusto earum hic minus
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci tenetur molestiae magni, quia reprehenderit molestias
                consequuntur placeat deserunt ullam alias.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
