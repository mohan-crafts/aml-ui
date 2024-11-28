import { useNavigate } from "react-router-dom";



// Higher-order component to pass the navigate function to the class component
const withNavigate = (WrappedComponent: any) => {
    return function WithNavigate(props: any) {
        const navigate = useNavigate();
        return <WrappedComponent {...props} navigate={navigate}></WrappedComponent>
    }
}

export default withNavigate;