import AccountButton from "./button/accountButton";
import MenuButton from "./button/menuButton";

export default function TopNavBar() {
  return (
    <div className=" flex justify-between items-center bg-slate-200 px-10 text-black text-sm">
      <MenuButton />
      <div className="w-96 flex justify-center items-center h-14">logo</div>
      <AccountButton />
    </div>
  );
}
