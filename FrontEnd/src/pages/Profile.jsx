import { useSelector } from "react-redux"

const Profile = () => {
  const {currentUser} = useSelector((state)=>state.user)
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-6">Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.avatar} alt="Profile" className="rounded-full self-center object-cover cursor-pointer h-24 w-24 mt-2" />
        <input type="text" id="username" placeholder="username" className="border p-3 rounded-lg"/>
        <input type="email" id="email" placeholder="email" className="border p-3 rounded-lg"/>
        <input type="password" id="password" placeholder="password" className="border p-3 rounded-lg" />
        <button className="p-3 bg-slate-700 text-white uppercase rounded-lg hover:opacity-95 disabled:opacity-80">update</button>
      </form>
      <div className="flex justify-between mt-5">
      <span className="text-red-700 cursor-pointer">Delete Account</span>
      <span className="text-red-700 cursor-pointer">Sign Out </span>
      </div>
    </div>
  )
}

export default Profile