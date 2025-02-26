import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";

function AlbumsListItem({ album }) {
  const header = (
    <div>
      <Button><GoTrashcan/></Button>
      {album.title}
    </div>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <AlbumsListItem album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
