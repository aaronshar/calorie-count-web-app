import React, { useState } from 'react';
import ProductRow from '../components/ProductRow';

function OrderPage({products}){
    return(
        <>
            <h2>Order</h2>
            <article>
                <p>
                    Order up to 10 of each product on this page.
                </p>
                <form action="/confirmed" method="POST">
                    <fieldset>
                        <legend>Please select quantity of products</legend>
                        <table className="products">
                            <caption>Available Products</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Order Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, i) => <ProductRow product = {product} key={i} />)}
                            </tbody>
                        </table>
                    </fieldset>
                    <button type="submit">Submit Order</button>
                </form>
            </article>
        </>
    );
}

export default OrderPage;