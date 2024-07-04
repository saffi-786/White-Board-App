function JoinRoomForm() {
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
        <div className="my-3">
          <input
            type="text"
            placeholder="Enter Room Code"
            className="p-3 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold w-full p-3 rounded-md hover:bg-blue-700"
          >
            Join Room
          </button>
        </div>
      </form>
    </div>
  );
}
export default JoinRoomForm;
