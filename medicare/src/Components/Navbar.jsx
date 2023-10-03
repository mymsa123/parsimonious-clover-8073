import { Flex, Spacer, Button, Image, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex
      position="sticky"
      justifyContent={"space-around"}
      top={0}
      width="100%"
      alignItems="center"
      bgColor="#00525d"
      p={4}
      pr={10}
      pl={10}
      height="60px"
      zIndex={1}
    >
      <Image src="/Images/MediCare.png" width="60px" />
      <Spacer />
      <LinkButton href="/" isActive={location.pathname === "/"}>
        Home
      </LinkButton>
      <Spacer />
      <LinkButton
        href="/medicines"
        isActive={location.pathname === "/medicines"}
      >
        Medicines
      </LinkButton>
      <Spacer />
      <LinkButton href="/doctors" isActive={location.pathname === "/doctors"}>
        Doctors
      </LinkButton>
    </Flex>
  );
};

function LinkButton({ children, href, isActive }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="link"
      colorScheme={isActive && "blue"}
      onClick={() => navigate(href)}
      color={isActive ? "orange" : "white"}
      fontWeight={isActive ? "bold" : "normal"}
      fontSize={isActive ? "xl" : "lg"}
    >
      {children}
    </Button>
  );
}
