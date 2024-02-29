import { getProductList } from "@/api/products";
import { ProductList } from "@/app/_components";

export default async function Home() {
  const { products } = await getProductList();

  return (
    <main className="flex min-h-screen flex-col items-center gap-20 px-4 py-24 md:px-8">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight drop-shadow-md lg:text-5xl">
        All products !
      </h1>
      <ProductList items={products} />
    </main>
  );
}
