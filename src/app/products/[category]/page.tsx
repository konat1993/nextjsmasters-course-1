import React from 'react';
import { notFound } from 'next/navigation';
import { getProductsByCategorySlug } from '@/api/products-by-category';
import { ProductList } from '@/app/_components';

type Props = {
  params: {
    category: string;
  }
};

const CategoryPage = async ({ params }: Props) => {

  const categoryProducts = await getProductsByCategorySlug(params.category)

  const products = categoryProducts.categories[0]?.products

  if (!products) {
    return notFound()
  }

  return (
    <div>
      <h1>Product category: <strong>{params.category}</strong></h1>
      <div>
        <pre>
          {/* {JSON.stringify(categoryProducts, null, 2)} */}
        </pre>
        <ProductList items={products} />
      </div>
    </div>
  );
};

export default CategoryPage;
