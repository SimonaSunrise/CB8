import "./index.css";
import { useState, useEffect } from "react";

const Post = ({ postData }) => {
  const { title, body, tags, reactions, userId } = postData;

  const [usersList, setUsersList] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUsersList(data));
    // fare try e catch
  }, []);

  return (
    <div className="Post">
      <div className="User_data">
        <img
          src={`${usersList.image}`}
          alt={
            "un robotino " +
            `${usersList.gender}` +
            " con gli occhi " +
            `${usersList.eyeColor}` +
            " di " +
            `${usersList.age}` +
            " anni"
          }
        />
        <h4>
          <span className="FirstName"> {`${usersList.firstName}`} </span>...ma
          nuatri ci riciemu{" "}
          <span className="Username"> {`${usersList.username}`} </span>
        </h4>
      </div>

      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>💠</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
