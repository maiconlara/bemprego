import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { useNavigate } from "react-router-dom";
interface ListItemProps {
  title: string;
  link: string;
  description: string;
}

const ListItem = ({ title, link, description }: ListItemProps) => {
  const navigate = useNavigate();

  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          onClick={() => navigate(`/${link}`)}
          className="block cursor-pointer select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100"
        >
          <div className="text-sm text-ribbon-900 font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
};
export default ListItem;
