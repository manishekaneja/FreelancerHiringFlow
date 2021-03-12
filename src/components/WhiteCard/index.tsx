import { FC } from "react";

export const WhiteCard: FC<{ title: string; content: string; }> = ({
  title,
  content,
}) => (
  <div className="rounded-md px-5 shadow-lg bg-white my-5 max-w-xs">
    <h3 className="primary text-2xl font-medium my-4">{title}</h3>
    <p className="p-0 m-0 secondary pb-7 text-sm">{content}</p>
  </div>
);
