import { ProductsGetListDocument } from "@/gql/graphql"
import { executeGraphql } from "@/lib/graphql-utils"

const getProductList = async () => {

    const graphqlResponse = await executeGraphql(
        ProductsGetListDocument,
        {}
    )
    return graphqlResponse

}

export { getProductList }
