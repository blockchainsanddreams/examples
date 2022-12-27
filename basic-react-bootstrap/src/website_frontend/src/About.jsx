import React, { useEffect } from "react";
import { website_backend as canister } from '../../declarations'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const About = () => {
  const [desc, setDesc] = React.useState("");

  const aboutText = async () => {
    try {
      const description = await canister.about();
      setDesc(description);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    aboutText();
  }, []);
  
  return (
    <div>
      <h1>About</h1>

      <div className="col-8">
        {desc}
      </div>
      
      <Link to="/">
        <Button>Home</Button>
      </Link>
    
    </div>
  );
};

export default About;
