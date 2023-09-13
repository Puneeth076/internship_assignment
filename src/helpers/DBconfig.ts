import mongose from "mongoose";

const configDB = async () => {
  await mongose.connect("mongodb://127.0.0.1:27017/todos").then(() => {
    console.log("mongodb connected");
  });
};

export default configDB;
