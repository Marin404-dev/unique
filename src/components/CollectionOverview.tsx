import collection_1 from "../assets/collection-1.png";

function CollectionOverview() {
  return (
    <div className="flex flex-row items-center gap-16 justify-center m-12">
      <div className="h-full w-full">
        <img src={collection_1} alt="" />
      </div>

      <div className="h-full w-full">
        <img src={collection_1} alt="" />
      </div>
    </div>
  );
}

export default CollectionOverview;
