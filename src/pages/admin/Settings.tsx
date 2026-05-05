import ab1 from "../../assets/admin/5.png";
import { Mail, Phone, User } from "lucide-react";
import { TextField } from "../../components/sharedui/Input";

const Settings = () => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm ring-1 ring-black/5">
      <div className="flex items-center gap-4">
        <img src={ab1} alt="" className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h2 className="text-xl font-bold text-gray-900">Ahmed Ali</h2>
          <p className="text-gray-600 text-sm">ahmedali@gmail.com</p>
        </div>
      </div>
      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextField
          label="Full Name"
          placeholder="Your First Name"
          value="Genix Drive"
          leftIcon={<User className="w-5 h-5" />}
        />
        <TextField
          label="Email"
          type="email"
          placeholder="Email"
          value="admin@mailinator.com"
          leftIcon={<Mail className="w-5 h-5" />}
        />
        {/* <SelectField
          label="Gender"
          placeholder="Select"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "na", label: "Prefer not to say" },
          ]}
        /> */}
        {/* <TextField label="Country" placeholder="Country" />
        <TextField label="Language" placeholder="Language" /> */}
        <TextField
          label="Number"
          type="tel"
          placeholder="Number"
           value="923054553671"
          leftIcon={<Phone className="w-5 h-5"/>}
        />
      </form>
    </div>
  );
};

export default Settings;
