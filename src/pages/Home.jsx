import Navigation from "../components/Navigation";
import { Stack, Button } from "react-bootstrap";
function Home () {
    return(
      <>
         <Navigation/> 
        <h2>خانه</h2>            
        <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
                Button as link
            </Button>
            <Button as="a" variant="success">
                Button as link
            </Button>
        </Stack>;  
      </>    
    )
  }
  export default Home;