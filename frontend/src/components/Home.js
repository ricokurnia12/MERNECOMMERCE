import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log(data, "ini data");
    return (
        <div className="home-container">
            {isLoading ? (
                <p>Loading.,.,.,.,</p>
            ) : error ? (
                <p>An error occured </p>
            ) : (
                <>
                    <h2>New Arrival</h2>
                    <div className="products">
                        {data?.map((products) => (
                            <div
                                key={products.id}
                                className="products"
                            >
                                <h3>{products.name}</h3>
                                <img
                                    src={products.image}
                                    alt={products.name}
                                />
                                <div className="details">
                                    <span>{products.desc}</span>
                                    <span className="price">
                                        ${products.price}
                                    </span>
                                    <button>Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
