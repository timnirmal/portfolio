import { notFound } from "next/navigation";
// No local articles are published. Writing links point to the existing Medium profile.
export default function ArticlePage() {
  notFound();
}
