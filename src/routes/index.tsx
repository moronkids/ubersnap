import { Switch } from 'react-router-dom';
import GuestRoutes from "routes/guest";
// import LoggedRoutes from "routes/logged";
import "assets/scss/styles.scss";
//import components
import Home from "components/home"
const Routes = (props: any) => {

    return (
        <>
            <Switch>
                {/* // ---- use this code when using, private route ---- */}

                {/* login routes */}
                {/* <LoggedRoutes exact path="/" component={} /> */}
                {/* guest routes */}

                {/* // ---- use this code when using, private route ---- */}
                <GuestRoutes exact path="/" component={Home} />
                {/* guest routes */}
            </Switch>
        </>
    )
}

export default Routes;