import * as React from "react";

import {
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CustomLink = ({ children, to, selectedColor, unselectedColor, customResolved, ...props }) => {
    let resolved = useResolvedPath(customResolved);
    let match = useMatch({ path: resolved.pathname, end: false });

    return (

        <Link
            style={{ color: match ? selectedColor : unselectedColor }}
            to={to}
            {...props}
        >
            {children}
        </Link>


    );
}

CustomLink.defaultProps = {
    selectedColor: "white",
    unselectedColor: "#6c7979"
}

export default CustomLink;