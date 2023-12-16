import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const HomeLink: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <HomeLinkStyled>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div
            className={`breadcrumb-item${
              index === items.length - 1 ? " active" : ""
            }`}
          >
            {item.to ? (
              <Link
                to={item.to}
                style={{
                  color: "#F7F7F7",
                  fontSize: "3vw",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: "#F7F7F7",
                  fontSize: "3vw",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </span>
            )}
          </div>
          {index < items.length - 1 && (
            <div
              style={{
                color: "#F7F7F7",
                fontSize: "3vw",
                textDecoration: "none",
              }}
            >
              {"　>　"}
            </div>
          )}
        </React.Fragment>
      ))}
    </HomeLinkStyled>
  );
};

const HomeLinkStyled = styled.div`
  display: flex;
  padding: 3vw 0 0 5vw;
  align-items: center;
`;

export default HomeLink;
