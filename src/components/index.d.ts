type LayoutProps = {
  children: React.ReactNode;
  className?: string;
  high?: boolean;
};

type HeaderProps = {};

type TitleProps = { type?: "dark" | "light"; title: string };

type JobCardProps = {
  role: "recruiter" | "candidate";
  data: Job & BasicInfo;
  onClick?: (id: string) => void;
};

type AvatarProps = { str: string };
