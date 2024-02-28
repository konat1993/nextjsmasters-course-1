// import { ProductItem } from "./product-item";
import { type ProductGetListQuery, type ProductList } from "@/gql/graphql";
// import { type Item } from "@/types/products";

type Props = {
    items: ProductGetListQuery["products"];
};

const ProductList = ({ items }: Props) => {
    console.log(items)
    return (
        <div
            data-testid="products-list"
            className="mt-16 flex w-fit max-w-screen-2xl flex-col flex-wrap items-center gap-10 md:flex-row md:items-stretch">
            {/* {items.data.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))} */}
        </div>
    );
};

export { ProductList };
