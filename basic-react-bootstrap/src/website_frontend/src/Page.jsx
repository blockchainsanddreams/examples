import React, { useEffect } from "react";
import { website_backend as canister } from '../../declarations'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Page = () => {
  const [desc, setDesc] = React.useState("");

  const pageText = async () => {
    try {
      const description = await canister.page();
      setDesc(description);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    pageText();
  }, []);
  
  return (
    <div>
      <h1>Page</h1>

      <div className="col-8">
        {desc}
      </div>
      
      <Link to="/">
        <Button>Home</Button>
      </Link>
    
    </div>
  );
};

export default Page;
