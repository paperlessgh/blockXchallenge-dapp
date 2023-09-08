import { FC, PropsWithChildren } from "react";

// components
import { Sidebar, Header } from "./navigation";
import Footer from "./footer";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex min-h-screen">
      {/* sidebar */}
      <Sidebar />
      {/* nav and main content */}
      <div className="relative flex w-screen min-w-0 shrink-0 flex-col sm:w-auto sm:shrink sm:grow">
        {/* nav */}
        <Header />
        {/* main content */}
        <div id="content" className="pb-6 pt-4">
          <div>{children}</div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
