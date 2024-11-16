import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Inicio",
    path: "/inicio",
    element: <Home />,
  },

  {
    name: "nosotros",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "proyectos",
    path: "/profile",
    element: <Profile />,
  },


  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
