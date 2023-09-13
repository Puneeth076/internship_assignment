import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import Form from "./Form";
import { ModelCOntext } from "@/context/store";
import Delete from "./Delete";
import axios from "axios";
import { todo } from "node:test";

const Todos = (props?: any) => {
  const { setUpdateModel, updateModel } = useContext(ModelCOntext);

  const [showDelete, setShowDelete] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newtodos, setNewTodos] = useState("");
  const [id, setId] = useState("");

  const handleDelete = () => {};

  useEffect(() => {
    axios.get("/api/todos/getalltodos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  let count = 1;
  return (
    <>
      <div className=" mt-5 ">
        <h1 className="text-3xl ">Todo's</h1>
        {todos.map((todo: any, index) => {
          return (
            <div
              key={index}
              className="flex mt-5 justify-between bg-gray-700 p-5 rounded-lg"
              style={{ width: "500px", height: "30%" }}
            >
              <div className="flex">
                <span>{count++} </span>

                <h1 className="ms-2">{todo.name}</h1>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setUpdateModel(true);
                    setNewTodos(todo.name);
                    setId(todo._id);
                  }}
                >
                  <img src="/view.svg" alt="" />
                </button>
                <button
                  onClick={() => {
                    setShowDelete(true);
                    setId(todo._id);
                  }}
                >
                  <img src="/delete.svg" alt="" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showDelete && <Delete setShowDelete={setShowDelete} id={id} />}
      {updateModel && (
        <Form
          title="Update todo"
          btn="Update"
          cancel="setUpdateModel"
          data={newtodos}
          id={id}
        />
      )}
      <div className="w-100"></div>
    </>
  );
};

export default Todos;
