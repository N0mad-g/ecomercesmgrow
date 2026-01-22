import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-List";
import { db } from "@/db";
import Image from "next/image";

const home = async () => {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });
  console.log(products);
  return (
    <>
      <Header />
      <div className="space-y-6">
        <Image
          src="/Banner-01.png"
          alt="Banner"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <ProductList title="Mais vendidos" products={products} />

        <Image
          src="/Banner-02.png"
          alt="Banner"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </>
  );
};

export default home;
