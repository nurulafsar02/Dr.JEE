import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-cyan-500 to-green-400 hover:from-pink-500 hover:to-green-500">{children}</button>
        </div>
    );
};

export default PrimaryButton;







