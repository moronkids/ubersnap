import { Route } from "react-router-dom";
const guest = ({ component: Component, ...rest }) => {

  // ---- use this code when using, private route ----

  // const token = localStorage.getItem('token');
  // if (token !== null) {
  //   return <Redirect to="/" />
  // }

  // ---- use this code when using, private route ----
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <>
            <Component {...props} />
          </>
        );
      }}
    />
  );

};

export default guest;