import React from 'react';
import { Link } from 'react-router-dom';

const MainComp = () => {
    return (
        <div>
            <button>
                <Link to='/memberList'>List</Link>
            </button>
        </div>
    );
};

export default MainComp;