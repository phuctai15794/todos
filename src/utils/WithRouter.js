import React from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

const WithRouter = (WrappedComponent) => {
    const HOCComponentWithRouterProps = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <WrappedComponent
                {...props}
                router={{ location, navigate, params }}
            />
        );
    };

    return HOCComponentWithRouterProps;
}

export default WithRouter;