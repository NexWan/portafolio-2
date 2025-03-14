import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Main from "~/components/Main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NexWan" },
    { name: "description", content: "NexWan Portafolio" },
  ];
}

export default function Home() {
  return <Main />;
}
