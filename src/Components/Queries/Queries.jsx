import React, { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import PrimaryButton from "../Button/PrimaryButton";
import QueryCard from "../Card/QueryCard";
import axios from "axios";

const Queries = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [queries, setQueries] = useState([]);

  const handleQuery = async () => {
    const data = {
      title,
      description,
    };
    try {
      await axios.post("http://localhost:4000/school/query", data);
      getQueries();
    } catch (error) {
      console.error(error.message);
    }
  };

  const getQueries = async () => {
    try {
      const res = await axios.get("http://localhost:4000/school/query");
      setQueries(res.data.reverse());
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getQueries();
  }, []);

  return (
    <div className="p-8">
      <h1 className="mb-2">Add Query Details</h1>
      <InputField
        label={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2"
      />
      <InputField
        label={"Description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type={"textarea"}
        className="mb-2"
      />
      <div className="my-2">
        <PrimaryButton onClick={handleQuery}>Post Query</PrimaryButton>
      </div>
      {queries.map((query, i) => (
        <QueryCard
          key={`query${i}`}
          title={query.title}
          description={query.description}
        />
      ))}
    </div>
  );
};

export default Queries;
