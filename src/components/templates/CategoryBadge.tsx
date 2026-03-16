import { Category } from "@/types/template";

const categoryStyles: Record<Category, string> = {
  Registration: "bg-badge-registration/20 text-badge-registration border-badge-registration/30",
  Payment: "bg-badge-payment/20 text-badge-payment border-badge-payment/30",
  Engagement: "bg-badge-engagement/20 text-badge-engagement border-badge-engagement/30",
};

const CategoryBadge = ({ category }: { category: Category }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border ${categoryStyles[category]}`}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
