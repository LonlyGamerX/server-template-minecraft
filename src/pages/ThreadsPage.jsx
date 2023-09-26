import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import user1 from "../imgs/user1.png";
import threadsData from "../json/threads.json";

const ThreadsPage = () => {
  const { id } = useParams();
  const [thread, setThread] = useState({});

  useEffect(() => {
    const foundThread = threadsData.find((thread) => thread.id === Number(id));
    setThread(foundThread);
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row">
          <section className="col-md-3 text-center me-3 white-outline bg-black">
            <img
              src={user1}
              alt="user1 placeholder"
              className="rounded-5 mt-3 img-thumbnail img-fluid"
            />
            <h5 className="mt-2">User1</h5>
            <p className="small">User1#0001</p>
            <p className="small">Rank: N/A</p>
            <p className="small">Joined on 25-02-1999</p>
          </section>
          <section className="col-md-8 white-outline bg-black">
            <h2>{thread.title}</h2>
            <p className="white-underline">{thread.description}</p>
            <p className="mt-2">{thread.content}</p>
            <p className="small txt-gray white-overline">
              Posted on {thread.date}
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ThreadsPage;
