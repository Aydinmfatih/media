import React from "react";

function PhotoListItem({ photo }) {
  return (
    <div>
      <img className="h-20 w-20" alt="photo" src={photo.url} />
    </div>
  );
}

export default PhotoListItem;
