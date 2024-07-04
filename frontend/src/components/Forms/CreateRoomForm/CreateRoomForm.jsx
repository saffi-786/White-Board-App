function CreateRoomForm() {
  return (
    <div className="mt-5 w-full">
      <form className="my-5">
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-3 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex w-full justify-between my-3">
          <input
            type="text"
            placeholder="Generate Room Code"
            disabled
            className="p-3 w-2/3 border border-gray-300 rounded-md"
          />
          <button className="border rounded-md px-1 text-blue-500 font-semibold border-blue-500 mx-1">
            Generate
          </button>
          <button className="border rounded-md text-red-500 font-semibold px-1 border-red-500">
            Copy
          </button>
        </div>
        <div>
            <button type="submit" className="bg-blue-500 text-white font-semibold w-full p-3 rounded-md hover:bg-blue-700">Create Room</button>
        </div>
      </form>
    </div>
  );
}
export default CreateRoomForm;
