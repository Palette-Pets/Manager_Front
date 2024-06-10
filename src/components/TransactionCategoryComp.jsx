// eslint-disable-next-line no-unused-vars
import React from 'react';

import CategoryStyle from '../styles/category.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TransactionCategoryComp = () => {
    return (
        <>
            <div className={CategoryStyle.iconsBar}>
                <Link to='/'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                        <span> 산다</span>
                    </button>
                </Link>

                <Link to='/'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                        <span> 판다</span>
                    </button>
                </Link>

                <Link to='/'>
                    <button className={CategoryStyle.iconButtonColumn}>
                        <FontAwesomeIcon icon={faArrowUpRightDots} className={CategoryStyle.iconColumn} style={{ color: "#ff0000" }} />
                        <span> 나눔</span>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default TransactionCategoryComp;