import React from "react";

const Button = ({ children, className }) => {
    return (
        <button
            className={`${className} py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg transition-all outline-none`}
        >
            {" "}
            {children}
        </button>
    );
};

export default Button;
