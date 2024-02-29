import { ProductItem } from "./product-item";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type Props = {
    items: ProductListItemFragmentFragment[]
};

const ProductList = ({ items }: Props) => {
    return (
        <div
            data-testid="products-list"
            className="mt-16 flex w-fit max-w-screen-2xl flex-col flex-wrap items-center gap-10 md:flex-row md:items-stretch"
        >
            {items.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export { ProductList };
