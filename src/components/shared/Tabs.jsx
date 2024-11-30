import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = () => {
  let [categories] = useState({
    WebDesign: [
      {
        id: 1,
        title: "Web Design Tips 01",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Web Design Tips 02",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Web Design Tips 03",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Web Design Tips 04",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Web Design Tips 05",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    WebDevelopment: [
      {
        id: 1,
        title: "Web Development Tips 01",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "Web Development Tips 02",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    FullStackWebDevelpment: [
      {
        id: 1,
        title: "Full Stack Web Development 01",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "Full Stack Web Development 02",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                  "ring-white/60 ring-offset-2 ring-offset-[#00637e] focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-[#00637e] shadow"
                    : "text-[#00637e] hover:bg-white/[0.12] hover:text-[#00637e]"
                )
              }
            >
              <span className="text-sm lg:text-lg hidden lg:block">
                {category}
              </span>
              <span className="text-xs lg:text-sm block lg:hidden three-dot">
                ---
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-[20px]">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {posts.map((post) => (
                  <div className="card-main" key={post.id}>
                    <Link className="card1" to="/">
                      <h3 className="text-xl font-bold">{post.title}</h3>
                      <p className="small">
                        Card description with lots of great facts and
                        interesting details.
                      </p>
                      <div className="go-corner" href="#">
                        <div className="go-arrow">→</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
