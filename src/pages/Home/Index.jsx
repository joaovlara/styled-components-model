import { Container, Box, Col, Stack, Row } from "..//..//styles/default.styles";
import { Avatar, StartBtn } from "./styles.home";
import { TitleMain, TitleSub, Text } from "@/styles/styles.text";
import NavInfos from "@/components/NavInfos/Index";
import Gif from '@/assets/img/jwao2.gif';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NavInfos />
      <Box borderColor="teal">
        <Row>
          <Col>
            <Stack>
              <Avatar src={Gif} alt="" />
              <TitleMain>Joao Lara</TitleMain>
            </Stack>
          </Col>
          <Col>
            <Stack justify="space-around">
              <TitleSub>Lorem ipsum dolor sit officiis voluptas quo, harupit velit nesciunt illum distinctio incidunt!</TitleSub>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                libero commodi? Maiores corporis eveniet molestiae magni quasi eaque tenetur
                ea alias aliquam, obcaecati odio corrupti placeat facilis earum dolorum eos.
              </Text>
              <StartBtn onClick={() => navigate("/About")}>START</StartBtn>
            </Stack>
          </Col>
        </Row>
      </Box>
    </Container>
  )
}

export default Home