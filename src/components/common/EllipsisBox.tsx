import { useState } from "react";
import styled from "styled-components";

import { FaAngleDown } from "react-icons/fa";
import Button from "@/components/common/Button";

interface Props {
  children: React.ReactNode;
  lineLimit: number;
}

export default function EllipsisBox({ children, lineLimit }: Props) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <EllipsisBoxStyle $linelimit={lineLimit} $expanded={expanded}>
      <p className={expanded ? "expanded" : ""}>{children}</p>
      <div className="toggle">
        <Button size="small" schema="normal" onClick={handleToggle}>
          <FaAngleDown /> {expanded ? "접기" : "펼치기"}
        </Button>
      </div>
    </EllipsisBoxStyle>
  );
}

interface EllipsisBoxStyleProps {
  $linelimit: number;
  $expanded: boolean;
}

const EllipsisBoxStyle = styled.div<EllipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 20px 0 0 0;
    margin: 0;
    max-height: ${({ $linelimit }) => `${$linelimit * 1.5}em`};
    transition: max-height 1s ease;
  }

  p.expanded {
    max-height: none;
  }

  .toggle {
    display: flex;
    justify-content: end;

    svg {
      transform: ${({ $expanded }) =>
        $expanded ? "rotate(180deg)" : "rotate(0)"};
      transition: transform 0.3s ease;
    }
  }
`;
