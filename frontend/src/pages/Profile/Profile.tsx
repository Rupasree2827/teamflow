import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  UserCircle2,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Save,
} from "lucide-react";
import toast from "react-hot-toast";

function Profile() {
  const [name, setName] = useState(
    localStorage.getItem("name") || "Rupasree"
  );

  const [email, setEmail] = useState(
    localStorage.getItem("email") || "rupasree@gmail.com"
  );

  const [phone, setPhone] = useState(
    localStorage.getItem("phone") || "+91 XXXXXXXXXX"
  );

  const [role, setRole] = useState(
    localStorage.getItem("role") || "AI & ML Developer"
  );

  const [location, setLocation] = useState(
    localStorage.getItem("location") || "India"
  );

  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("role", role);
    localStorage.setItem("location", location);

    toast.success("Profile Updated Successfully!");
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 rounded-3xl p-10 text-white shadow-xl mb-8">

        <div className="flex flex-col md:flex-row items-center gap-8">

          <div className="bg-white/20 rounded-full p-5 backdrop-blur-lg">
            <UserCircle2 size={120} />
          </div>

          <div>

            <h1 className="text-5xl font-bold">
              {name}
            </h1>

            <p className="mt-3 text-xl text-indigo-100">
              {role}
            </p>

            <p className="mt-2 text-indigo-200">
              Welcome to your profile settings.
            </p>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-3xl font-bold mb-8">
          Profile Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold flex items-center gap-2 mb-2">
              <UserCircle2 size={18} />
              Name
            </label>

            <input
              className="w-full border rounded-xl p-3"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          <div>
            <label className="font-semibold flex items-center gap-2 mb-2">
              <Mail size={18} />
              Email
            </label>

            <input
              className="w-full border rounded-xl p-3"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </div>

          <div>
            <label className="font-semibold flex items-center gap-2 mb-2">
              <Phone size={18} />
              Phone
            </label>

            <input
              className="w-full border rounded-xl p-3"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />
          </div>

          <div>
            <label className="font-semibold flex items-center gap-2 mb-2">
              <Briefcase size={18} />
              Role
            </label>

            <input
              className="w-full border rounded-xl p-3"
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold flex items-center gap-2 mb-2">
              <MapPin size={18} />
              Location
            </label>

            <input
              className="w-full border rounded-xl p-3"
              value={location}
              onChange={(e) =>
                setLocation(e.target.value)
              }
            />
          </div>

        </div>

        <button
          onClick={handleSave}
          className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-lg"
        >
          <Save size={20} />
          Save Changes
        </button>

      </div>
    </MainLayout>
  );
}

export default Profile;