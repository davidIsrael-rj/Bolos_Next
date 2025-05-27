import Menu from "@/template/menu";
import SiderBar from "@/template/sideBar";
import TopBar from "@/template/topBar";

export default function Home() {
  return (
    <div className={`flex flex-row justify-center p-4 `}>
      <SiderBar/>
      <TopBar/>
    </div>
  );
}

