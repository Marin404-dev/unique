import product1 from "../assets/product1.png";
import { TiShoppingCart } from "react-icons/ti";
import { MdNavigateNext } from "react-icons/md";

function BestSellerSection() {
  const headerHeight = 50;

  const products = [
    { id: 1, name: "Product 1", price: 69.99, image: product1 },
    { id: 2, name: "Product 2", price: 69.99, image: product1 },
    { id: 3, name: "Product 3", price: 69.99, image: product1 },
    { id: 4, name: "Product 4", price: 69.99, image: product1 },
    { id: 5, name: "Product 5", price: 69.99, image: product1 },
    { id: 6, name: "Product 5", price: 69.99, image: product1 },
  ];

  return (
    <div
      className="flex flex-col items-center"
      style={{ minHeight: `calc(100vh - ${headerHeight}px)`, paddingTop: 16 }}
    >
      <div className="w-full max-w-7xl p-8">
        <h1 className="text-4xl md:text-5xl font-normal leading-tight mb-4 pl-2">
          Unique Best Seller
        </h1>

        <p className="text-[#dadada] mb-6 pl-2">
          Our most loved pieces. These items define Unique; clean silhouttes,
          bold complementrary colors and effortless everyday wear. The
          essentials our community keeps coming back to.
        </p>

        <div className="mt-4">
          <hr className="border-t border-[#e5e5e5]" />
        </div>
      </div>

      {/* Grid collection */}
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-3 gap-8 p-8">
        {/* LOOP PRODUCTS */}
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            <div className="border border-[#dadada] p-4 rounded-md h-90">
              <div className="m-2 h-full flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain max-h-60 max-w-60"
                />
              </div>
            </div>

            {/* product bottom */}
            <div className="flex flex-row justify-between items-center mt-3">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>

              <div className="border border-[#c30022] text-[#c30022] px-3 py-1 text-sm rounded flex flex-row items-center space-x-2 hover:bg-[#cd0022] hover:text-white cursor-pointer">
                <TiShoppingCart />
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellerSection;
