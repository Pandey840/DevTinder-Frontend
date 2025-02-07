import {useState, useCallback} from 'react';
import {motion} from 'framer-motion';
import {useDropzone} from 'react-dropzone';
import Select from 'react-select';
import {FiUpload, FiSave, FiRefreshCw} from 'react-icons/fi';
import {FaBirthdayCake, FaFemale, FaMale} from 'react-icons/fa';

const ProfileSetupPage = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    gender: 'Male',
    age: '',
    about: '',
    skills: [],
    photo:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&h=200',
  });

  const skillOptions = [
    {value: 'react', label: 'React'},
    {value: 'javascript', label: 'JavaScript'},
    {value: 'typescript', label: 'TypeScript'},
    {value: 'node', label: 'Node.js'},
    {value: 'python', label: 'Python'},
  ];

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfileData((prev) => ({...prev, photo: reader.result}));
    };
    reader.readAsDataURL(file);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: {'image/*': []},
    maxFiles: 1,
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setProfileData((prev) => ({...prev, [name]: value}));
  };

  const handleSkillsChange = (selectedOptions) => {
    setProfileData((prev) => ({...prev, skills: selectedOptions}));
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', {...profileData, ...data});
  };

  const handleReset = () => {
    setProfileData({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      age: '',
      about: '',
      skills: [],
      photo:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&h=200',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 text-white md:p-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Form Section */}
        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          className="rounded-xl bg-gray-800 bg-opacity-50 p-6 shadow-2xl"
        >
          <h2 className="mb-6 text-2xl font-bold">Profile Setup</h2>
          <form className="space-y-6">
            {/* Disabled Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={profileData.firstName}
                    disabled
                    className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={profileData.lastName}
                    disabled
                    className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    disabled
                    className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Gender
                  </label>
                  <input
                    type="text"
                    value={profileData.gender}
                    disabled
                    className="w-full rounded-lg bg-gray-700 px-4 py-2 opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Interactive Fields */}
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Age</label>
                <input
                  type="number"
                  name="age"
                  value={profileData.age}
                  onChange={handleInputChange}
                  className="w-full rounded-lg bg-gray-700 px-4 py-2 transition-all focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">About</label>
                <textarea
                  name="about"
                  value={profileData.about}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full rounded-lg bg-gray-700 px-4 py-2 transition-all focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Skills</label>
                <Select
                  isMulti
                  options={skillOptions}
                  value={profileData.skills}
                  onChange={handleSkillsChange}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: '#374151',
                      borderColor: '#4B5563',
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: '#374151',
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? '#4B5563' : '#374151',
                    }),
                  }}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Profile Picture
                </label>
                <div
                  {...getRootProps()}
                  className="cursor-pointer rounded-lg border-2 border-dashed border-gray-600 p-4 text-center transition-all hover:border-blue-500"
                >
                  <input {...getInputProps()} />
                  <FiUpload className="mx-auto mb-2 text-2xl" />
                  <p>Drag & drop or click to upload</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                type="submit"
                className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2 transition-colors hover:bg-blue-700"
              >
                <FiSave className="mr-2" /> Save Changes
              </motion.button>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                type="button"
                onClick={handleReset}
                className="flex items-center justify-center rounded-lg bg-gray-600 px-6 py-2 transition-colors hover:bg-gray-700"
              >
                <FiRefreshCw className="mr-2" /> Reset
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          className="rounded-xl bg-gray-800 bg-opacity-50 p-8 shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 p-1 shadow-lg">
              <motion.img
                src={profileData.photo}
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover"
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{type: 'spring', stiffness: 200}}
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold">{`${profileData.firstName} ${profileData.lastName}`}</h2>
            <p className="text-gray-400">{profileData.email}</p>

            <div className="mt-3 flex gap-4 text-gray-300">
              <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                className="flex items-center gap-2 rounded-lg bg-gray-700 px-3 py-1 shadow"
              >
                {profileData.gender === 'Male' ? (
                  <FaMale className="text-lg text-blue-400" />
                ) : profileData.gender === 'Female' ? (
                  <FaFemale className="text-lg text-pink-400" />
                ) : (
                  <span className="text-lg">🧑</span>
                )}
                <span>{profileData.gender || 'Not specified'}</span>
              </motion.div>
              <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                className="flex items-center gap-2 rounded-lg bg-gray-700 px-3 py-1 shadow"
              >
                <FaBirthdayCake className="text-lg text-yellow-400" />
                <span>
                  {profileData.age ? `${profileData.age} years` : 'Unknown age'}
                </span>
              </motion.div>
            </div>

            <div className="mt-6 w-full">
              <h3 className="mb-2 text-lg font-semibold">About</h3>
              <p className="text-gray-300">
                {profileData.about || 'No bio added yet'}
              </p>
            </div>
            <div className="mt-6 w-full">
              <h3 className="mb-2 text-lg font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill) => (
                  <span
                    key={skill.value}
                    className="rounded-full bg-blue-600 px-3 py-1 text-sm"
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSetupPage;
