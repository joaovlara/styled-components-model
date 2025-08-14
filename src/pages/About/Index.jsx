import { Container, Box, Col } from "..//..//styles/default.styles";
import NavBarBtn from "@/components/Navbar/Index";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavBarBtn navColor={(props) => props.theme.colors.darkRed} />
      <Box borderColor={(props) => props.theme.colors.darkRed}>
        <Col>
          1
        </Col>
        <Col>
          2
        </Col>
      </Box>
    </Container>
  )
}

export default About