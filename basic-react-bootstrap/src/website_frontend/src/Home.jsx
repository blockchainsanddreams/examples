import React, { useEffect } from "react";
import { website_backend as canister } from '../../declarations'

const Home = () => {
  const [desc, setDesc] = React.useState("");

  const homeText = async () => {
    try {
      const description = await canister.home();
      setDesc(description);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    homeText();
  }, []);


  return (
    <div>
      <h1>Home</h1>
      <div className="col-8">
        {desc}
      </div>
    </div>

  );
};

export default Home;