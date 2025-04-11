import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0);

  const handleBookMark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  };

  const handleMarkAsRead = (time, id) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);
    // console.log(id);
    handleRemoveFromBookmark(id);
  };

  const handleRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookmark);
  };

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleBookMark={handleBookMark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time: {readingCount}</h1>
          <h1>Bookmark Count: {bookmarked.length}</h1>
          {bookmarked.map((marked) => (
            <p
              key={marked.id}
              className="bg-red-400 p-2 shadow m-2 text-white rounded-xl text-xl"
            >
              {marked.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
