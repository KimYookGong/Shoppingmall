import styles from './page.module.css';
import Header from '../components/Header';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    id: 1,
    title: "HERITAGE SELVEDGE DENIM",
    category: "Denim",
    image: "/images/heritage_denim.png",
    description: "14oz Japanese raw selvedge denim. Uncompromising durability meets timeless design."
  },
  {
    id: 2,
    title: "TECHNICAL SHELL PARKA",
    category: "Outerwear",
    image: "/images/technical_outerwear.png",
    description: "Nylon metal fabric with a metallic sheen. Waterproof, windproof, and breathable."
  },
  {
    id: 3,
    title: "VINTAGE WASH JACKET",
    category: "Denim",
    image: "/images/vintage_denim_jacket.png",
    description: "Heavily distressed and washed heritage jacket with intricate stitching details."
  },
  {
    id: 4,
    title: "NYLON METAL PUFFER",
    category: "Outerwear",
    image: "/images/nylon_puffer.png",
    description: "Premium down insulation wrapped in our signature iridescent nylon metal shell."
  }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ProductGallery products={products} />
    </main>
  );
}
