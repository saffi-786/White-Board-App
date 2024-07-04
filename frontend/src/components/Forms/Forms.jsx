import CreateRoomForm from "./CreateRoomForm/CreateRoomForm";
import JoinRoomForm from "./JoinRoomForm/JoinRoomForm";

function Forms() {
  return (
    <div className="pt-5 grid grid-cols-2 mt-5">
      <div className="w-3/4 h-96 mt-5 border p-5 border-orange-950 rounded-md mx-auto flex flex-col items-center">
        <h1 className="font-semibold text-4xl text-orange-900 mt-5">Create Room</h1>
        <CreateRoomForm />
      </div>
      <div className="w-3/4 h-96 mt-5 border p-5 border-orange-950 rounded-md mx-auto flex flex-col items-center">
        <h1 className="font-semibold text-4xl text-orange-900 mt-5">Join Room</h1>
        <JoinRoomForm />
      </div>
    </div>
  );
}
export default Forms;
