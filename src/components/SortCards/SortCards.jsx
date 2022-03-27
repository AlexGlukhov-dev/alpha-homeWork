import React, {useState} from 'react';
import classes from './sortCards.module.scss';
import {likedCard} from "../../redux/slices/appData";
import {useDispatch} from "react-redux";

const SortCards = () => {
    const [active, setActive] = useState(false)
    const dispatch = useDispatch();

    const sortText = active ? 'Показать все:' : 'Показать выбранные:';


    const sortHandle = () => {
        active ? setActive(false) : setActive(true);
        dispatch(likedCard())
    }

    return (
        <div className={classes['sort-cards']}>
            <span>{sortText}</span>
            <button onClick={sortHandle} className={active ? classes['check-active'] : classes['check-no-active']}>
                <svg fill="none" height="32" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
                    <path
                          d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"/>
                    <polygon className="cls-1" id="inner-path"
                             points="14 21.591 9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591"/>
                    <rect className="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32"
                          id="_Transparent_Rectangle_" width="32"/>
                </svg>
            </button>

        </div>
    );
};

export default SortCards;