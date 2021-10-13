import { Route, BrowserRouter, Switch } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import LandingPage from "../pages/landingPage";

const AllRoutes = () => {
    return (
        <>
            <BaseLayout>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={LandingPage} exact />
                    </Switch>
                </BrowserRouter>
            </BaseLayout>
        </>
    )
}

export default AllRoutes