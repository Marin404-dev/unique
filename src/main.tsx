import { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.tsx";
import HeroCarousel from "./components/HeroCarousel.tsx";
import ProductOverview from "./components/ProductOverview.tsx";
import CollectionOverview from "./components/CollectionOverview.tsx";
import BestSellerSection from "./components/BestSellerSection.tsx";
import Footer from "./components/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="pt-16">
        <Header />
        <HeroCarousel />
        <ProductOverview />
        <CollectionOverview />
        <BestSellerSection />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
