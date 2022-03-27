import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "./ProductCard/ProductCard";
import classes from "./goodsList.module.scss";


const GoodsList = () => {
    const {goodsData, goodsLiked} = useSelector(store => store.data);

    return (
        <div className={classes['goods-list']}>
            {
                goodsLiked ?
                goodsLiked.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        liked={product.liked}
                    />)
                )
                :
                goodsData.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        liked={product.liked}
                    />)
                )
            }
        </div>
    );
};

export default GoodsList;