import { ModelCOntext } from "@/context/store";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import axios from "axios";

const Form = (props?: any) => {
  const { setShowModel, setUpdateModel, setLoading } = useContext(ModelCOntext);

  const [name, setName] = useState("");
  useEffect(() => {
    setName(props.data ? props.data : "");
  }, []);

  const handleSubmit = async () => {
    setLoading(true);

    if (name === "") {
      setLoading(false);
      return;
    } else if (props.cancel == "setUpdateModel") {
      await axios.post("/api/todos/updatetodo", {
        id: props.id,
        name,
      });
      setUpdateModel(false);
      setLoading(false);
    } else {
      const data = await axios.post("/api/todos/addtodo", { name });
      setShowModel(false);
      setLoading(false);
    }
  };
  return (
    <div className="modal">
      <div className="content flex-col bg-gray-500 w-96 text-center p-7 rounded-lg">
        <span
          className="flex cursor-pointer justify-end"
          onClick={() =>
            props.cancel == "setUpdateModel"
              ? setUpdateModel(false)
              : setShowModel(false)
          }
        >
          X
        </span>
        <h1 className="text-3xl mb-2">{props.title}</h1>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          className="p-2 rounded-md text-black"
          placeholder="Enter new task"
        />
        <div className="flex justify-center ">
          <button
            className="bg-blue-500 w-96 mt-4 py-2 rounded-lg"
            onClick={handleSubmit}
          >
            {props.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
