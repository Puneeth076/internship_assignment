import { ModelCOntext } from "@/context/store";
import axios from "axios";
import React, { useContext } from "react";

const Delete = (props: any) => {
  const { setLoading } = useContext(ModelCOntext);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/todos/deletetodo", { id: props.id });
      console.log(res);
      props.setShowDelete(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      props.setShowDelete(false);
      setLoading(false);
    }
  };
  return (
    <div className="modal">
      <div className="content flex-col bg-gray-500 w-96 text-center p-7 rounded-lg">
        <span
          className="flex cursor-pointer justify-end"
          onClick={() => props.setShowDelete(false)}
        >
          X
        </span>
        <h1 className="text-3xl mb-2">Are you sure you want to delete</h1>

        <div className="flex justify-center gap-5">
          <button
            className="bg-red-500 w-96 mt-4 py-2 rounded-lg"
            onClick={() => props.setShowDelete(false)}
          >
            back
          </button>
          <button
            onClick={handleDelete}
            className="bg-blue-500 w-96 mt-4 py-2 rounded-lg"
          >
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
