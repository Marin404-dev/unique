import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/header.tsx";
import HeroCarousel from "./components/HeroCarousel.tsx";
import ProductOverview from "./components/ProductOverview.tsx";
import CollectionOverview from "./components/CollectionOverview.tsx";
import BestSellerSection from "./components/BestSellerSection.tsx";
import Footer from "./components/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="pt-16">
      <Header />
      <HeroCarousel />
      <ProductOverview />
      <CollectionOverview />
      <BestSellerSection />
      <Footer />
    </div>
  </StrictMode>
);
