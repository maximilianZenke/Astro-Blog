import { useState } from "react";

export default function TagFilter({ posts }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const tags = Array.from(new Set(posts.flatMap(p => p.frontmatter.tags || [])));
  const filtered = selectedTag
    ? posts.filter(p => p.frontmatter.tags?.includes(selectedTag))
    : [];

  return (
    <div>
      <div className="tags">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <ul>
        {filtered.map(p => (
          <li key={p.url}>
            <a href={p.url}>{p.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}