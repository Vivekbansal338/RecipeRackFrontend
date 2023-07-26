import "./BookmarkButton.css";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmarkAsync,
  removeBookmarkAsync,
} from "../../redux/BookmarkdataSlice";
import { useBookmarkStatus } from "../../hooks/useBookmarkStatus";
import { toast } from "react-toastify";

function BookmarkButton({ data, recipe_id, recipepurchased }) {
  const dispatch = useDispatch();
  const bookmarkedData = useSelector((state) => state.bookmarkdata);
  const userid = useSelector((state) => state.useriddata.userid);
  const [alreadyBookmarked, setAlreadyBookmarked] = useBookmarkStatus(
    bookmarkedData,
    recipe_id
  );

  async function handleBookmark(e) {
    e.stopPropagation();
    if (alreadyBookmarked) {
      try {
        const response = await dispatch(
          removeBookmarkAsync({ userid: userid, recipe_id: recipe_id })
        );
        if (response.success) {
          toast.success("Bookmark removed successfully!");
        }
      } catch (err) {
        toast.error("Error removing bookmark!");
      }
    } else {
      try {
        const response = await dispatch(
          addBookmarkAsync({ userid: userid, recipedata: data })
        );
        if (response.success) {
          toast.success("Bookmark added successfully!");
        }
      } catch (err) {
        if (!userid) {
          toast.error("Please login to bookmark!");
          return;
        }
        toast.error("Error adding bookmark!");
      }
    }
  }

  return (
    <button
      className={`bookmarkbutton ${
        alreadyBookmarked ? "alreadybookmarked" : ""
      } ${recipepurchased ? "recipepurchased" : ""}`}
      onClick={handleBookmark}
      aria-label="Bookmark this recipe"
    >
      {alreadyBookmarked ? (
        <FaHeart style={{ color: "red", fill: "red", fontSize: "24px" }} />
      ) : (
        <FaHeart style={{ fontSize: "24px" }} />
      )}
    </button>
  );
}

export default BookmarkButton;
