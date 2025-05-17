import { Container, Box, Col } from "..//..//styles/default.styles";
import NavBarBtn from "@/components/Navbar/Index";
import { TitleMain, TitleSub, Text, Caption } from "@/styles/styles.text";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavBarBtn />
      <Box borderColor={(props) => props.theme.colors.accent}>
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

export default Projects