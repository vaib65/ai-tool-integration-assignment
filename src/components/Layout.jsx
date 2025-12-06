
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen ">
      {/* header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur shadow-sm">
        <Header />
      </div>

      {/*sidebar  */}
      <Sidebar />

      {/* Main content area*/}
      <main className="mt-[100px] md:ml-64 p-6 h-[calc(100vh-100px)] overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
