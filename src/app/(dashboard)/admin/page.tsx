import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className='p-4 gap-4 flex flex-col md:flex-row'>

      {/* left */}  
        <div className="w-full md:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="admin" />
            <UserCard type="teacher" />
            <UserCard type="student" />
            <UserCard type="parent" />
          </div>
          </div>
         
   
      {/* right */}
        <div className="w-full md:w-1/3">r</div>
    </div>

  )
}

export default AdminPage;