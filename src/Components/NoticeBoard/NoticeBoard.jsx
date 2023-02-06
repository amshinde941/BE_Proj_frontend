import React, { useEffect, useState } from "react";
import axios from "axios";
import NoticeCard from "../Card/NoticeCard";
import InputField from "../InputField/InputField";
import PrimaryButton from "../Button/PrimaryButton";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // const handleNotice = async () => {
  //   const data = {
  //     tit
  //   }
  // }

  const getNotices = async () => {
    try {
      const res = await axios.get("http://localhost:4000/school/notice");
      setNotices(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getNotices();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Noticeboard</h1>
      <hr className="my-2" />

      <InputField
        label={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2"
      />
      <InputField
        label={"Message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type={"textarea"}
        className="mb-2"
      />
      <div className="my-2">
        <PrimaryButton>Add Notice</PrimaryButton>
      </div>

      {notices.map((notice, i) => (
        <NoticeCard
          key={`notice${i}`}
          title={notice.title}
          message={notice.message}
        />
      ))}
    </div>
  );
};

export default NoticeBoard;
