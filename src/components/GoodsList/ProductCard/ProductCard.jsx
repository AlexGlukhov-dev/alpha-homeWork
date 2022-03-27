import React from 'react';
import cn from 'classnames';
import classes from './productCard.module.scss';
import {useDispatch} from "react-redux";
import {deleteCard, toggleLike} from "../../../redux/slices/appData";

const ProductCard = ({name, description, img, price, id, liked}) => {
    const dispatch = useDispatch();

    const deleteCardHandle = () => dispatch(deleteCard(id))
    const likeToggle = () => dispatch(toggleLike(id))

    return (
        <div className={classes['product']}>
            <div onClick={deleteCardHandle} className={classes['product__delete']}>
                <svg height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1"/><path d="M9 9.5L16.7 17.3" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><path d="M16.7 9.5L9 17.3" stroke="#4F4F4F" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/></svg>
            </div>
            <div className={classes['product__img']}>
                <img src={img} alt='productImg'/>
            </div>
            <div className={classes['product__info']}>
                <h3>{name}</h3>
                <span>{description}</span>
            </div>
            <div className={classes['product__bottom']}>
                <span>{price}</span>
                <div onClick={likeToggle} className={!liked ? cn(classes['like'], classes['like-no-active']) : cn(classes['like'], classes['like-active'])}>
                    <svg role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="M9.727273 2.090909c-1.1454548 0-2.1545457.572727-2.727273 1.472727-.5727273-.9-1.5818182-1.472727-2.7272727-1.472727C2.4727273 2.090909 1 3.563636 1 5.363636c0 3.245455 6 6.545455 6 6.545455s6-3.272727 6-6.545455c0-1.8-1.472727-3.272727-3.272727-3.272727z"/></svg>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;