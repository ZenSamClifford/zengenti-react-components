import { useEffect, useState } from "react";
import { Icon } from "../icon";

export interface AccordionItemProps {
  className?: string;
  title: string;
  content: string;
  idx?: number;
  pOpen?: boolean | undefined;
  _handleToggle?: (idx: number) => void;
}

export const AccordionItem = ({
  className,
  title,
  content,
  idx = 1,
  pOpen,
  _handleToggle,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(pOpen);

  const _handleClick = () => {
    if (pOpen === undefined) setIsOpen(!isOpen);
    else if (_handleToggle) _handleToggle(idx);
  };

  useEffect(() => {
    setIsOpen(pOpen);
  }, [pOpen]);

  return (
    <div className={["accordion-item", className].join(" ")}>
      <button
        type="button"
        onClick={() => _handleClick()}
        aria-expanded={isOpen ? true : false}
        className="accordion-item__btn"
      >
        {title}
        <Icon
          type={isOpen ? "collapse" : "expand"}
          height={24}
          width={24}
          viewBox="0 0 24 24"
        />
      </button>
      {isOpen && (
        <div
          className="accordion-item__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};
