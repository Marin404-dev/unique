import collection_1 from "../assets/collection-1.png";

function CollectionOverview() {
  return (
    <div className="w-[95vw] max-w-8xl mx-auto flex flex-row items-center justify-between gap-4 mt-8">
      {/* First Image with overlay */}
      <div className="w-full relative">
        <img src={collection_1} alt="" className="w-full object-contain" />
        {/* Overlay near bottom */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
          <h2 className="text-4xl font-semibold mb-6">Textured Collection</h2>
          <a href="" className="text-lg underline">
            View Full Collection
          </a>
        </div>
      </div>

      {/* Second Image */}
      <div className="w-full relative">
        <img src={collection_1} alt="" className="w-full object-contain" />
        {/* Overlay near bottom */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
          <h2 className="text-4xl font-semibold mb-6">Textured Collection</h2>
          <a href="" className="text-lg underline">
            View Full Collection
          </a>
        </div>
      </div>
    </div>
  );
}

export default CollectionOverview;
