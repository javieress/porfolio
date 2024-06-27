"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
// importar svg logo 'alma.svg'

export default function PortfolioNavbar() {
  const menuItems = [
    {
      title: "Proyectos",
      url: "projects",
    },
    {
      title: "Experiencia",
      url: "experience",
    },
    {
      title: "Sobre mi",
      url: "about-me",
    },
  ];

  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <a href="#" className="flex items-center gap-2">
            <Image src="/alma.svg" alt="Javier Rojas" width={40} height={40} />
            <p className="font-bold text-inherit">Porfolio Javier Rojas</p>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={`/#${item.url}`}>{item.title}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="mailto:javier.est.rojas@gmail.com"
            underline="hover"
            target="_blank"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

// export default function App() {
//   return (
//     <Navbar shouldHideOnScroll>
//       <NavbarBrand>
//         <AcmeLogo />
//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
