import React from "react";

const Concepts = (props) => {
    return (
        <div>
            title={props.concept[0].title}
            image={props.concept[0].image}
            description={props.concept[0].description}
        </div>
    )
};

export default Concepts;