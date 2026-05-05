interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger" | "default";
}

const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  success: "bg-green-400 text-white ring-green-200",
  warning: "bg-yellow-400 text-white ring-yellow-200",
  danger: "bg-red-400 text-white ring-red-200",
  default: "bg-gray-400 text-white ring-gray-200",
};

const Badge = ({ children, variant = "default" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
