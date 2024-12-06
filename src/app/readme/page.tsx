import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ReadmePage = async () => {
  // Read the README.md file from the root directory
  const filePath = path.join(process.cwd(), "README.md");
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <main className="prose mx-auto p-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
};

export default ReadmePage;
