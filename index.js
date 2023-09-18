import axios from "axios";

export const handler = async (event, context) => {
  try {
    const todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return { message: "Working man", todos };
  } catch (error) {
    console.log("ERROR: *******************" + error.message);
  }
};
