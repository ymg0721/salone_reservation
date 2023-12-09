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
              <Link to={item.to} style={{ color: "black" }}>
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
          </div>
          {index < items.length - 1 && (
            <div className="breadcrumb-item separator">{"　>　"}</div>
          )}
        </React.Fragment>
      ))}
    </HomeLinkStyled>
  );
};

const HomeLinkStyled = styled.div`
  display: flex;
  padding: 20vw 0 0 10vw;
`;

export default HomeLink;
