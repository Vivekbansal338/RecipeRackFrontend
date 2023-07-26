import icons from "../../utils/icons";
import "./Details.css";

function Details(props) {
  const { title, publisher, tags } = props;

  function renderTags() {
    return tags.map((tag, index) => {
      if (icons[tag] === undefined) return null;
      return (
        <div key={index} className="tag">
          <div className="tag-container" title={tag}>
            <h1 className="tagicons">{icons[tag]}</h1>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="recipe-details">
      <h2>{title.slice(0, 70)}...</h2>
      <p>By: {publisher.slice(0, 20)}...</p>
      <div className="meal-type-health-icons">{renderTags()}</div>
    </div>
  );
}

export default Details;
