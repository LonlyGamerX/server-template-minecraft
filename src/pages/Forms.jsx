import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import threadsData from "../json/threads.json";

const Forms = () => {
  const [selectedCategory, setSelectedCategory] = useState("Announcements");
  const [threads, setThreads] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("Announcements");

  useEffect(() => {
    setThreads(threadsData);

    const categories = [
      "announcements",
      "fAQ",
      "general",
      "guides",
      "support/help",
      "general questions",
      "server requests",
      "minigames ideas",
      "marketplace",
    ];
    const uniqueCategories = Array.from(new Set(categories));
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    const sortedThreads = threadsData
      .filter((thread) => thread.category === selectedCategory)
      .sort((a, b) => {
        // Sort pinned threads to the top
        if (a.pinned && !b.pinned) {
          return -1;
        } else if (!a.pinned && b.pinned) {
          return 1;
        } else {
          // If both are pinned or not pinned, sort by date
          return new Date(b.date) - new Date(a.date);
        }
      });

    setThreads(sortedThreads);
  }, [selectedCategory]);

  return (
    <div className="container">
      <h1 className="text-center mb-3 text-decoration-underline">
        {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
      </h1>
      <div className="row">
        <div className="col-md-3">
          <div className="d-flex flex-column">
            {categories.map((category, index) => (
              <button
                className={`btn text-white white-underline mb-2 ${
                  selected === category ? "active" : ""
                }`}
                key={index}
                onClick={() => {
                  setSelected(category);
                  setSelectedCategory(category);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <div className="d-flex flex-column">
            {threads.map((thread) => (
              <Nav.Link
                href={`/${selectedCategory}/${thread.id}`}
                key={thread.id}
              >
                <div className="white-outline bg-black mb-2">
                  <h3 className="ms-2 mt-1">{thread.title}</h3>
                  <p className="ms-2">{thread.description}</p>
                  <p className="ms-2 small txt-gray">Posted on {thread.date}</p>
                </div>
              </Nav.Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
