import React, { useContext, useEffect } from "react";
import { Store } from "Conainer/Provider";

const Login = () => {
  // const context = useContext(StoreContext);
  const data = {
    token: "skmfsvndnvdnvsdfnvdkvnfksdnvmnergkotrrjgnjrkngrngkjrngrntknrkgnt",
    name: "Prakash Mishra",
    userRole: "admin",
  };
  const store = Store();

  useEffect(() => {
    localStorage.setItem("mfe_user_data", JSON.stringify(data));
    console.log(store);
  }, []);

  // console.log(Store.state, "Login in container");

  return <div className="container">Login</div>;
};

export default Login;
