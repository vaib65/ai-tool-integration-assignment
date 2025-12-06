import {
  MessageSquare,
  TrendingUp,
  BookOpen,
  FileText,
  Mail,
  Info,
  Bot,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="hidden md:block fixed top-[100px] left-0 w-64  h-[calc(100vh-100px)] bg-white shadow-sm border-r border-slate-200 z-40 px-5 py-6 ">
      <nav className="space-y-8 text-sm">
        {/*ai tools */}
        <div>
          <h2 className="text-xs font-semibold text-slate-500 mb-3">
            AI Tools
          </h2>
          <ul className="space-y-1">
            <li>
              <a
                href="https://biolyt.cloud/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700
                hover:bg-indigo-50 hover:text-indigo-700 transition duration-500"
              >
                <MessageSquare className="w-4 h-4 opacity-70 " />
                Biolyt AI Chat
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700
                hover:bg-indigo-50 hover:text-indigo-700 transition"
              >
                <TrendingUp className="w-4 h-4 opacity-70 " />
                Biolyt Forecast
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700
                hover:bg-indigo-50 hover:text-indigo-700 transition"
              >
                <Bot className="w-4 h-4 opacity-70 " />
                Biolyt Ai Assistant
              </a>
            </li>
          </ul>
        </div>

        {/*documentation and resources */}
        <div>
          <h2 className="text-xs font-semibold text-slate-500 mb-3">
            Resources
          </h2>
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700
                hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <FileText className="w-4 h-4 opacity-70 " />
                Latest Insights
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700
                hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <BookOpen className="w-4 h-4 opacity-70 " />
                Documentation
              </a>
            </li>
          </ul>
        </div>

        {/*about company and contact us */}
        <div>
          <h2 className="text-xs font-semibold text-slate-500  mb-3">
            Company
          </h2>

          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className=" flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700
                hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <Info className="w-4 h-4 opacity-70 " />
                About Biolyt
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-700
                hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <Mail className="w-4 h-4 opacity-70 " />
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
