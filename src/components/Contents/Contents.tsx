// react
import { useMemo } from "react";
// atoms
import { useAtomValue } from "jotai";
import { contentsAtom } from "~/data/contentData";
// shadcn/ui
import { Card } from "../ui/card";
// components
import ContentQuiz from "./ContentQuiz";
// markdown
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import nord from "react-syntax-highlighter/dist/cjs/styles/prism/nord";
import remarkGfm from "remark-gfm";
// i18n
import { useTranslation } from "react-i18next";
import PostImage from "../Community/CommuinityPostImage";

interface ContentsProps {
  lectureId: string | undefined;
}

export default function Contents({ lectureId }: ContentsProps) {
  const { t } = useTranslation();

  const contents = useAtomValue(contentsAtom);

  const currentContent = useMemo(() => {
    return contents?.find((item) => item.id === lectureId) ?? null;
  }, [contents, lectureId]);

  const customStyle = {
    margin: "0.5rem 0",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
  };

  const renderContent = () => {
    if (!currentContent) {
      return <p>{t("contents.no_data")}</p>;
    }

    switch (currentContent.type) {
      case 0:
        // Descriptive Content
        return (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a({ children, href, ...props }) {
                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline break-all"
                    {...props}
                  >
                    {children}
                  </a>
                );
              },
              strong({ children, ...props }) {
                return (
                  <strong
                    className="font-extrabold text-gray-900 mx-0.5"
                    {...props}
                  >
                    {children}
                  </strong>
                );
              },
              ul({ children, ...props }) {
                return (
                  <ul
                    className="list-disc list-inside space-y-2 md:text-base text-sm bg-green-50/85 p-4 rounded-lg"
                    {...props}
                  >
                    {children}
                  </ul>
                );
              },
              ol({ children, ...props }) {
                return (
                  <ol className="space-y-2" {...props}>
                    {children}
                  </ol>
                );
              },
              p({ children }) {
                // children이 배열인지 확인 후 처리
                const childArray = Array.isArray(children)
                  ? children
                  : [children];
                // 단일 자식이 img이면 <p>를 사용하지 않고 fragment로 렌더링
                if (
                  childArray.length === 1 &&
                  childArray[0]?.type?.name === "img"
                ) {
                  return <>{childArray}</>;
                }

                return (
                  <p className="leading-7 whitespace-pre-wrap md:text-base text-sm">
                    {children}
                  </p>
                );
              },
              h1({ children, ...props }) {
                return (
                  <h1
                    className="md:text-2xl text-xl font-bold md:mb-4 mb-2 text-blue-500"
                    {...props}
                  >
                    {children}
                  </h1>
                );
              },
              h3({ children, ...props }) {
                return (
                  <h3 className="md:text-xl text-lg font-bold" {...props}>
                    {children}
                  </h3>
                );
              },
              h4({ children, ...props }) {
                return (
                  <h4
                    className="md:text-lg text-base font-semibold text-gray-700"
                    {...props}
                  >
                    {children}
                  </h4>
                );
              },
              table({ children }) {
                return (
                  <div className="my-6 md:max-w-full max-w-2xl overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse text-left md:text-base text-sm">
                      {children}
                    </table>
                  </div>
                );
              },
              thead({ children }) {
                return (
                  <thead className="bg-gray-100/80 border-b border-gray-200">
                    {children}
                  </thead>
                );
              },
              th({ children }) {
                return (
                  <th className="text-start px-2 py-3 font-bold text-gray-700 whitespace-nowrap">
                    {children}
                  </th>
                );
              },
              td({ children }) {
                return (
                  <td className="px-2 py-3 border-b border-gray-100 text-gray-600 leading-relaxed w-fit">
                    {children}
                  </td>
                );
              },
              tr({ children }) {
                return (
                  <tr className="bg-white hover:bg-gray-50/50 transition-colors last:border-0">
                    {children}
                  </tr>
                );
              },
              code({ className, children }) {
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    style={nord}
                    language={match[1]}
                    PreTag="pre"
                    wrapLongLines={true}
                    customStyle={customStyle}
                    lineProps={{
                      style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                    }}
                  >
                    {String(children)
                      .replace(/\n$/, "")
                      .replace(/\n&nbsp;\n/g, "")
                      .replace(/\n&nbsp\n/g, "")}
                  </SyntaxHighlighter>
                ) : (
                  <SyntaxHighlighter
                    style={nord}
                    background="green"
                    language="textile"
                    PreTag="pre"
                    wrapLongLines={true}
                    customStyle={customStyle}
                    lineProps={{
                      style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                    }}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              },
              blockquote({ children, ...props }) {
                return (
                  <blockquote
                    className="md:pl-3 pl-2 md:pr-6 pr-2 py-2 rounded-lg md:text-base text-sm space-y-4"
                    style={{
                      background: "#deeaff",
                    }}
                    {...props}
                  >
                    {children}
                  </blockquote>
                );
              },
              img({ node, ...props }) {
                return (
                  <PostImage
                    src={props.src || ""}
                    title={props.alt || "content-image"}
                  />
                );
              },
              em({ children, ...props }) {
                return (
                  <span style={{ fontStyle: "italic" }} {...props}>
                    {children}
                  </span>
                );
              },
            }}
          >
            {currentContent.content}
          </ReactMarkdown>
        );
      case 1:
      case 2:
        // Multiple Choice or Short Answer Quiz
        return <ContentQuiz quiz={currentContent} />;
      default:
        return <p>Unknown content type.</p>;
    }
  };

  return (
    <Card
      id="content-scroll-inner"
      className="p-4 md:p-8 mb-8 z-0 w-full bg-gray-950/5 shadow-2xl overflow-hidden"
    >
      {renderContent()}
    </Card>
  );
}
