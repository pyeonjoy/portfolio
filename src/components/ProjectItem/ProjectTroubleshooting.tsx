import React, { useState } from "react";
import { Project } from "./types";
import "../../styles/projectItem/ProjectTroubleshooting.css";

interface PortfolioTroubleshootingProps {
  troubleshooting: Project["troubleshooting"];
  projectId?: string;
}

const PortfolioTroubleshooting: React.FC<PortfolioTroubleshootingProps> = ({
  troubleshooting,
  projectId,
}) => {
  const [showCodeIndex, setShowCodeIndex] = useState<number | null>(null);

  if (!troubleshooting) return null;

  const getTroubleshootingNumber = (
    currentIndex: number,
    items: typeof troubleshooting.items | undefined
  ) => {
    if (!items) return 0;
    for (let i = currentIndex; i >= 0; i--) {
      if (items[i]?.type === "problem") {
        let count = 0;
        for (let j = 0; j <= i; j++) {
          if (items[j]?.type === "problem") {
            count++;
          }
        }
        return count;
      }
    }
    return 0;
  };

  return (
    <div className="portfolioTroubleshooting">
      <h4 className="portfolioTroubleshootingTitle">{troubleshooting.title}</h4>
      <div className="portfolioTroubleshootingContent">
        {troubleshooting.items.map((item, index) => {
          const troubleshootingNumber = getTroubleshootingNumber(
            index,
            troubleshooting.items
          );
          const hasCode = !!item.code;
          const codeToShow = item.code;

          // Project01에서 learning 항목 다음에 여백 추가 (다음 항목이 problem이거나 마지막 항목일 때)
          const isLastInGroup =
            projectId === "Project01" &&
            item.type === "learning" &&
            (index === troubleshooting.items.length - 1 ||
              troubleshooting.items[index + 1]?.type === "problem");

          return (
            <div
              key={index}
              className={`portfolioTroubleshootingItemWrapper ${
                isLastInGroup ? "portfolioTroubleshootingItemWrapper--spacing" : ""
              }`}
            >
              <div
                className={`portfolioTroubleshootingItem portfolioTroubleshootingItem--${item.type}`}
              >
                <span className="portfolioTroubleshootingIcon">
                  {item.type === "problem" && "✕"}
                  {item.type === "solution" && "✓"}
                  {item.type === "learning" && "•"}
                </span>
                <span className="portfolioTroubleshootingText">
                  {troubleshootingNumber > 0 && `${troubleshootingNumber}. `}
                  {item.text}
                </span>
              </div>
              {hasCode && codeToShow && projectId !== "Project01" && (
                <>
                  <button
                    className="portfolioCodeToggleButton"
                    onClick={() =>
                      setShowCodeIndex(showCodeIndex === index ? null : index)
                    }
                  >
                    {showCodeIndex === index ? "코드 숨기기" : "코드 보기"}
                  </button>
                  {showCodeIndex === index && (
                    <div className="portfolioTroubleshootingCode">
                      <pre className="portfolioCodeBlock">
                        <code>{codeToShow}</code>
                      </pre>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioTroubleshooting;
