import React, { useEffect, useState } from "react";
import "./Favorites.css";
import { MdDeleteSweep, MdOpenInNew } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Favorites = () => {
  const [task, setTask] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFav = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFav);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      if (Array.isArray(data)) {
        setTask(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = (tasksid) => {
    const currentFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]",
    );
    const newFavorites = currentFavorites.filter((id) => id !== tasksid);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setFavorites(newFavorites);
    toast.info("Removed from collection");
  };

  const clearAllFavorites = () => {
    if (window.confirm("Clear all your saved posts?")) {
      localStorage.setItem("favorites", "[]");
      setFavorites([]);
      toast.info("Collection cleared");
    }
  };

  const favoritePosts = task.filter((task) => favorites.includes(task.id));
  return (
    <div className="favorites-page-container">
      <Navbar />
<main className="favorites-main">
        {favoritePosts.length === 0 ? (
          <div className="fav-empty-state">
            <div className="empty-icon-wrapper">
              <FaRegStar className="empty-icon" />
            </div>
            <h3>Your list is empty</h3>
            <p>Discover interesting posts and save them to read later</p>
            <button
              className="browser-btn"
              onClick={() => navigate("/dashboard")}
            >
              Explore Stories
            </button>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <div className="favorites-hero">
              <div className="hero-shape"></div>
              <div className="hero-content">
                <h1>Your Reading List</h1>
                <p>Enjoy the collection of stories you've curated.</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="favorites-content">
              <div className="favorites-header">
                <h2>
                  Curated Collection
                  <span className="count-badge">
                    {favoritePosts.length}
                  </span>
                </h2>

                <button
                  className="clear-all-btn"
                  onClick={clearAllFavorites}
                >
                  <MdDeleteSweep size={20} />
                  Clear List
                </button>
              </div>

              <div className="favorites-grid">
                {favoritePosts.map((post) => (
                  <div className="fav-card" key={post.id}>
                    <div className="fav-card-image">
                      <img src={post.imageurl} alt="Post" />
                      <div className="fav-card-overlay">
                        <button
                          className="read-btn"
                          onClick={() =>
                            navigate(`/postDetail/${post.id}`)
                          }
                        >
                          <MdOpenInNew />
                          Read Article
                        </button>
                      </div>
                    </div>

                    <div className="fav-card-body">
                      <div className="fav-meta">
                        <span className="fav-author">
                          {post.auther}
                        </span>
                      </div>

                      <h3 className="fav-title">
                        {post.title}
                      </h3>

                      <p className="fav-excerpt">
                        {post.description}
                      </p>

                      <button
                        className="remove-fav-btn"
                        onClick={() =>
                          removeFavorite(post.id)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
