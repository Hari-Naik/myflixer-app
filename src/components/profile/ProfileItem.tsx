import Link from "next/link";
import { tituliam } from "../fonts";

type Props = {
  label: string;
  icon: React.ReactNode;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileItem: React.FC<Props> = ({ label, icon, setShowProfile }) => {
  return (
    <Link
      href={`/user/${label.toLowerCase()}`}
      onClick={() => setShowProfile(false)}
      className="flex items-center gap-1 text-sm text-[#f1ffff] p-1 hover:bg-[#1b2e4b] rounded">
      {icon}
      <span className={`${tituliam.className}`}>{label}</span>
    </Link>
  );
};

export default ProfileItem;
