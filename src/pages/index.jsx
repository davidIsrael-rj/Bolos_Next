import Menu from "@/template/menu";
import SiderBar from "@/template/sideBar";

export default function Home() {
  return (
    <div className={`flex flex-row justify-center p-4 `}>
      <Menu/>
      <SiderBar/>
    </div>
  );
}

