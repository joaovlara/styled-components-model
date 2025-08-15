import React from "react";
import { CardContainer, CardContent, CardFooter, FooterButton, IconColumn, Title, Description, TextColumn } from "@/components/Card/styles.card";

const Card = ({
  icon,
  title,
  description,
  btn1Text,
  btn1Link,
  btn2Text,
  btn2Link,
  colors = {},
}) => {
  const { bgColor, borderColor, textColor, titleColor, hoverColor } = colors;

  return (
    <CardContainer bgColor={bgColor} borderColor={borderColor} textColor={textColor}>

      <CardContent>
        <IconColumn>{icon}</IconColumn>
        <TextColumn>
          <Title titleColor={titleColor}>{title}</Title>
          <Description>{description}</Description>
        </TextColumn>
      </CardContent>

      <CardFooter borderColor={borderColor}>
        <FooterButton
          href={btn1Link}
          target="_blank"
          rel="noopener noreferrer"
          textColor={textColor}
          borderColor={borderColor}
          hoverColor={hoverColor}
          hasBorder
        >
          {btn1Text}
        </FooterButton>
        <FooterButton
          href={btn2Link}
          target="_blank"
          rel="noopener noreferrer"
          textColor={textColor}
          borderColor={borderColor}
          hoverColor={hoverColor}
        >
          {btn2Text}
        </FooterButton>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
