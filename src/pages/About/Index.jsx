import { useState } from "react";
import { Container, Box, Col, Stack, Row } from "../../styles/default.styles";
import { TitleMain, TitleSub, Text } from "@/styles/styles.text";
import NavBarBtn from "@/components/Navbar/Index";
import { IconButton } from "@/components/Buttons/styles.button";
import { FaGithub, FaJs, FaReact, FaCss3Alt } from "react-icons/fa";

const About = () => {

  const icons = [
    {
      id: "js",
      icon: <FaJs />,
      color: "#f7df1e",
      text: "Descrição sobre meu conhecimento em JavaScript..."
    },
    {
      id: "github",
      icon: <FaGithub />,
      color: "#ffffff",
      text: "Meus projetos hospedados no GitHub..."
    },
    {
      id: "react",
      icon: <FaReact />,
      color: "#61dafb",
      text: "Experiência com React e desenvolvimento frontend..."
    },
    {
      id: "css",
      icon: <FaCss3Alt />,
      color: "#2965f1",
      text: "Estilização com CSS moderno, animações e layouts responsivos..."
    }
  ];

  const [activeIcon, setActiveIcon] = useState(icons[0]);

  return (
    <Container>
      <NavBarBtn navColor={(props) => props.theme.colors.darkRed} />
      <Box borderColor={(props) => props.theme.colors.darkRed}>
        <Row>
          <Stack>
            <TitleSub>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TitleSub>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
              libero commodi? Maiores corporis eveniet molestiae magni quasi eaque tenetur
              ea alias aliquam, obcaecati odio corrupti placeat facilis earum dolorum eos.
            </Text>
            <Stack>
              <Row>
                {icons.map((item) => (
                  <IconButton key={item.id}
                    color={item.color}
                    active={activeIcon.id === item.id}
                    onClick={() => setActiveIcon(item)}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Row>
              <Text style={{ color: activeIcon.color }}>
                {activeIcon.text}
              </Text>
            </Stack>
          </Stack>
        </Row>
      </Box>
    </Container>
  );
};

export default About;
