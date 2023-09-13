"use client";
import { useState, useContext, useEffect } from "react";
import Form from "./../components/Form";
import Todos from "@/components/Todos";
import { ModelCOntext } from "@/context/store";
import axios from "axios";
import Loading from "@/components/Loading";
export default function Home() {
  const { showModel, setShowModel, loading } = useContext(ModelCOntext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className="flex min-h-screen flex-col items-center p-24">
          <h1 className="text-4xl">Todo list</h1>
          <button
            className="text-2xl w-96 rounded mt-4 py-2 bg-blue-600"
            onClick={() => setShowModel(true)}
          >
            Add new todo +
          </button>
          {showModel && (
            <Form
              title="Add new todo"
              btn="ADD +"
              setShowModel="setShowModel"
            />
          )}
          <Todos />
        </main>
      )}
    </>
  );
}
