
export const UpdateEmployee = () => {
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
    <div className="px-8 py-8">
      <div className="font-thin text-2xl tracking-wider">
        <h1>Update Employee</h1>
      </div>
     

      <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
        <button
          className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
          Update
        </button>
        <button
          className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}
