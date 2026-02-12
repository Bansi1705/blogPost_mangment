import React from "react";
import Navbar from "../Components/Navbar";
import {
  FaCloudUploadAlt,
  FaHeading,
  FaRegPaperPlane,
  FaTimes,
  FaUser,
} from "react-icons/fa";

function CreatePost() {
  return (
    <div className="creat-post-page">
      <Navbar />

      <div className="create-post-container">
        <header className="form-header">
          <h1>Create New Post</h1>
          <p>Share Your Thoughts and Stories With The World.</p>
        </header>

        <div className="post-form-card">
          <form action="">
            <div className="form-group">
              <label htmlFor="title">Post Title</label>
              <div className="input-wrapper">
                <FaHeading className="input-icon" />
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  placeholder="enter Your Catchy Title..."
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="auther">Auther Name</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="auther"
                  id="auther"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                placeholder="What's In Your Mind ?? Write Your Story Here."
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <div className="image-source-tabs">
                <button type="button" className="tab-btn active">
                  Image URL
                </button>
                <button type="button" className="tab-btn">
                  Upload File
                </button>
              </div>

              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="url"
                  name="imageurl"
                  id="auther"
                  className="form-control"
                  placeholder="Paste Your Image URL here (e.g. /https:/images/flower.jpg)"
                />
              </div>

              <div className="image-upload-area">
                <FaCloudUploadAlt className="upload-icon" />
                <p>Click to Upload image from your device</p>
              </div>

              <div className="imge-preview-container">
                <img src="" alt="preview" className="image-preview" />

                <button type="button" className="remove-image-btn">
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="form-action-row">
              <button type="submit" className="submit-btn">
                <FaRegPaperPlane />
                Publish Post
              </button>

              <button type="button" className="cancel-btn">
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
