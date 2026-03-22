import Link from "next/link";
import { getAuthorBySlug } from "@/lib/authors";

export function AuthorByline({ authorSlug }: { authorSlug: string }) {
  const author = getAuthorBySlug(authorSlug);
  if (!author) return null;

  return (
    <p className="text-sm text-gray-400">
      By{" "}
      <Link
        href={`/blog/authors/${author.slug}`}
        className="text-blue-600 hover:underline"
      >
        {author.name}
      </Link>
      , {author.role}
    </p>
  );
}
