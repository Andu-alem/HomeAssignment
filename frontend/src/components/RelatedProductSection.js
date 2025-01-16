import ProductCard from '@/components/ProductCard'

const RelatedProductSection = ({ products }) => {
    return (
        <div className="my-5">
            <h4 className="my-2 mx-1 text-zinc-700">Related Products</h4>
            <div className="flex flex-nowrap overflow-x-auto w-full gap-4 scrollbar-hide">
                {
                    products.map(product => (
                        <div key={ product.id }>
                            <ProductCard  className="w-[200px]" product={ product } />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProductSection