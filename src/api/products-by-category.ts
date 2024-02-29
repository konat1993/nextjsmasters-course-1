import { ProductsGetByCategorySlugDocument } from "@/gql/graphql"
import { executeGraphql } from "@/lib/graphql-utils"

const getProductsByCategorySlug = async (category?: string) => {

    const categoryProducts = await executeGraphql(
        ProductsGetByCategorySlugDocument,
        { slug: category }
    )

    return categoryProducts

}

export { getProductsByCategorySlug }