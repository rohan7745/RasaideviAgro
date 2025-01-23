import React from 'react';
import './Product.css'

const Product = () => {

    const products = [
        {
            id: 1,
            name: 'Country eggs',
            price: 59.99,
            image: 'https://assets.tendercuts.in/product/c/h/chk_cntry_egg-base.jpg',
            description: 'Brown town Eggs "The taste of gavran"',
        },
        {
            id: 2,
            name: 'Boiler eggs',
            price: 129.99,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1IsB_AU4Oi_hXSqvFppgdPNqahNznhGaP3IcOuGVtqqdp4gmr_HudUIEJCoH8BENp1Q&usqp=CAU',
            description: 'broiler chicken production for the present and future faces challenges due to its remarkable growth.',
        },
        {
            id: 3,
            name: 'Little Chicks',
            price: 39.99,
            image: 'https://media.istockphoto.com/id/503332432/photo/one-day-old-chickens.jpg?s=612x612&w=0&k=20&c=aEQR7mWnMe9jw6d75xBLglBciEZQjmjEHnbuAlz6qHU=',
            description: 'To start your own business. We help you with our little chicks.',
        },
        {
            id: 3,
            name: 'Fresh Chicken',
            price: 39.99,
            image: 'https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?s=612x612&w=0&k=20&c=QtfdAhdeIGpR3JUNDmYFo6cN0el8oYMcOXMQI7Qder4=',
            description: 'Chicken is such a food that is liked all over the world. We serve you a best quality." Chiken is the ultimate comfort food"',
        },
        {
            id: 3,
            name: 'Poultry Feeder',
            price: 39.99,
            image: 'data:image/jpeg;base64,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',
            description: 'Rasaidevi Poultry Equipments Feeder eliminates feed wastage & it has three adjustment for controlling the feed level.',
        },
        {
            id: 3,
            name: 'Poultry Cage',
            price: 39.99,
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRFSe2KeuukmCosSkjakvufam5rMqfPosWANYRSRa86gHswogt4qzSR0bq-cVya_RTdquvGG6Eg2nox9vBznAhvdS8b3tS5ekZSKKNqGJtsS01zuHlTyii7',
            description: 'A poultry cage is a structure designed to house and confine chickens or other poultry birds comfortably and securely.',
        },
        {
            id: 3,
            name: 'Nipple drinkers',
            price: 39.99,
            image: 'https://images.meesho.com/images/products/158927754/ebugm_1200.jpg',
            description: 'Nipple drinkers are now the most used, often in conjunction with cups that catch spilled water to help reduce litter wetting.',
        },
    ];

    return (
        <>
        <h3>Products</h3>
        <div className="product-list">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    {/*<p className="product-price">₹{product.price.toFixed(2)}</p>*/}
                    {/*<button className="add-to-cart-btn">Add to Cart</button>*/}
                </div>
            ))}
        </div>
        </>
    );
};

export default Product;
