import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
function PhotoListItem({ photo }) {
  const [removePhoto] = useRemovePhotoMutation();
  const handleClick = () => {
    removePhoto(photo);
  }

  return (
    <div onClick={handleClick} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" alt="imagee" src={photo.url} />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan className="text-2xl text-red-500" />
      </div>
    </div>
  );
}

export default PhotoListItem;
