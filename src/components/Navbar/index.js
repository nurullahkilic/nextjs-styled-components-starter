import Image from "next/image";
import { NavbarContent, LogoLink, Wrapper } from "./styles";
import Link from "next/link";

import { Button, HighlightedButton } from "@/shared/Button";
import { RightArrow } from "@/components/icons";

import NextStyledLogo from "../../../public/next-styled.png";

export default function Navbar() {
  return (
    <NavbarContent>
      <Wrapper>
        <LogoLink as={Link} href="/">
          <Image src={NextStyledLogo} alt="Logo" />
        </LogoLink>
        <Button title={"With Layout"} as={Link} href="/with-layout" />
        <Button title={"Without Layout"} as={Link} href="/without-layout" />
      </Wrapper>
      <Wrapper>
        <HighlightedButton title={"Sign in"} as={Link} href="/">
          <RightArrow color="black" />
        </HighlightedButton>
      </Wrapper>
    </NavbarContent>
  );
}
