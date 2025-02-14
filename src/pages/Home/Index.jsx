import { Container, Box, SpaceRow, Col, Row } from "..//..//styles/default.styles";
import Button from "@/components/Buttons/Index";
import { Avatar } from "./styles.home";
import { TitleMain, TitleSub, Text, Caption } from "@/components/Text/styles.text";
import Gif from '@/assets/img/jwao2.gif';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <SpaceRow>
        <Button />
        <Button />
        <Button />
      </SpaceRow>
      <Box>
        <Col>
          <Avatar src={Gif} alt="" />
          <TitleMain>Joao Lara</TitleMain>
        </Col>
        <Col>
        <TitleSub>Lorem ipsum dolor sit officiis voluptas quo, harupit velit nesciunt illum distinctio incidunt!</TitleSub>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          libero commodi? Maiores corporis eveniet molestiae magni quasi eaque tenetur
          ea alias aliquam, obcaecati odio corrupti placeat facilis earum dolorum eos.
        </Text>
        <button onClick={() => navigate("/About")}>NAVEGAR</button>
        </Col>
      </Box>
    </Container>
  )
}

export default Home