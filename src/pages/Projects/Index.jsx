import { Container, Box, Row, GridContainer } from "@/styles/default.styles";
import NavBarBtn from "@/components/Navbar/Index";
import { useNavigate } from "react-router-dom";
import Card from "@/components/Card/Index";
import { FaRegCalendarAlt } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      icon: <FaRegCalendarAlt />,
      title: "Projeto 1",
      description: "Descrição do projeto 1...",
      btn1Text: "GitHub",
      btn1Link: "https://github.com",
      btn2Text: "Demo",
      btn2Link: "#"
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Projeto 2",
      description: "Descrição do projeto 2...",
      btn1Text: "GitHub",
      btn1Link: "https://github.com",
      btn2Text: "Demo",
      btn2Link: "#"
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Projeto 3",
      description: "Descrição do projeto 3...",
      btn1Text: "GitHub",
      btn1Link: "https://github.com",
      btn2Text: "Demo",
      btn2Link: "#"
    },
    {
      icon: <FaRegCalendarAlt />,
      title: "Projeto 4",
      description: "Descrição do projeto 4...",
      btn1Text: "GitHub",
      btn1Link: "https://github.com",
      btn2Text: "Demo",
      btn2Link: "#"
    }
  ];

  return (
    <Container>
      <NavBarBtn navColor={(props) => props.theme.colors.accent} />
      <Box borderColor={(props) => props.theme.colors.accent}>
        <Row>

          <GridContainer>
            {projects.map((project, index) => (
              <Card
                key={index}
                {...project}
                colors={{
                  bgColor: (props) => props.theme.colors.black,
                  borderColor: (props) => props.theme.colors.accent,
                  textColor: (props) => props.theme.colors.accent,
                  titleColor: "#fff",
                  hoverColor: "#00e5ff22"
                }}
              />
            ))}
          </GridContainer>
        </Row>
      </Box>
    </Container>
  );
};

export default Projects;
