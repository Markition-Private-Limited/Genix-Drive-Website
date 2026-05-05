import frame from "../../assets/fframe.png";
import BlogBanner from "../../assets/blogbaner.jpg";
import userPlaceHolder from "../../assets/userPlaceHolder.png";

import { useNavigate } from "react-router-dom";

import blog1 from "../../assets/blogs/1.jpg";
import blog2 from "../../assets/blogs/2.png";
import blog3 from "../../assets/blogs/3.jpg";
import blog4 from "../../assets/blogs/4.jpg";
import blog5 from "../../assets/blogs/5.jpg";
import blog6 from "../../assets/blogs/6.jpg";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import ReadytoDrive from "../../components/web/ReadytoDrive";

const BlogsRecords = [
  {
    blogImg: blog1,
    category: "Social & Family Connect",
    title: "What Makes GenixDrive Different",
    description:
      "Discover how telematics technology improves vehicle safety, efficiency, and real-time monitoring for modern drivers.",
    user: {
      userName: "Olivia Rhye",
      userImg:
        "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-10",
    },
  },
  {
    blogImg: blog2,
    category: "Safety & Protection",
    title: "What Makes GenixDrive Different",
    description:
      "Regular maintenance ensures long vehicle life. Learn simple steps to prevent breakdowns and reduce repair costs.",
    user: {
      userName: "Phoenix Baker",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603020.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-08",
    },
  },
  {
    blogImg: blog3,
    category: "Driving Insights",
    title: "What Makes GenixDrive Different",
    description:
      "GPS tracking helps monitor vehicle location and ensures safety for families and fleet managers alike.",
    user: {
      userName: "Lana Steiner",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603021.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-06",
    },
  },
  {
    blogImg: blog4,
    category: "Driving Insights",
    title: "What Makes GenixDrive Different",
    description:
      "AI-powered insights are transforming driving experiences with predictive analytics and smart alerts.",
    user: {
      userName: "Alec Whitten",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603022.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-05",
    },
  },
  {
    blogImg: blog5,
    category: "Social & Family Connect",
    title: "What Makes GenixDrive Different",
    description:
      "Use connected apps and vehicle data to plan efficient and enjoyable road trips with your loved ones.",
    user: {
      userName: "Demi WIlkinson",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603023.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-03",
    },
  },
  {
    blogImg: blog6,
    category: "Gamification & Rewards",
    title: "What Makes GenixDrive Different",
    description:
      "Learn how monitoring tools help optimize battery usage and performance in modern electric vehicles.",
    user: {
      userName: "Candice Wu",
      userImg:
        "https://img.freepik.com/free-photo/portrait-smiling-businesswoman-posing_23-2148603024.jpg?semt=ais_hybrid&w=740&q=80",
      date: "2026-02-01",
    },
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="blogs">
      {/* BANNER */}
      <div className="banner relative">
        <img src={frame} alt="Pricing banner" className="w-full" />
        <SubHeading
          weight="medium"
          size="4xl"
          className="absolute text-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white"
        >
          <p>
            Our <span className="text-light-green">Blogs</span>
          </p>
        </SubHeading>
      </div>

      {/* BLOGS SECTION */}
      <section className="bg-white price-cards px-[56px] py-[120px] padding-50">
        <div className="col-span-3 p-5  bg-secondary  overflow-hidden z-10 relative h-[490px] mb-10 blog-banner-details">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={BlogBanner}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
          <div className="absolute bottom-0 left-0 w-full  p-10  z-10">
            <span className="inline-block bg-blue-500 text-white p-1 rounded-sm text-sm">
              Technology
            </span>
            <SubHeading
              size="4xl"
              color="white"
              weight="semibold"
              className="mt-5 mb-5"
            >
              GenixDrive – Turning Everyday Journeys{" "}
              <p>into Safer, Smarter Experiences</p>
            </SubHeading>
            <div className="flex items-center gap-2 items-center">
              <img
                className="w-8 h-8 rounded-full mr-2 object-cover"
                src={userPlaceHolder}
                alt=""
              />

              <Paragraph color="white" size="sm" weight="bold">
                Tracey Wilson
              </Paragraph>
              <Paragraph color="white" size="sm" className="text-gray-600">
                Augest 20, 2022
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BlogsRecords.map((blog, index) => (
            <div
              onClick={() => navigate(`/blogs/${index}`)}
              key={index}
              className="blog-card-container cursor-pointer bg-white p-5  shadow-2xl"
            >
              <div className="blog-img mb-4">
                <img
                  className="w-full h-[240px] object-cover object-[50%_0%] "
                  src={blog.blogImg}
                  alt=""
                />
              </div>
              <div className="blog-deta blogsrecords">
                <strong className="text-primary leading-5 mb-3 block">
                  {blog.category}
                </strong>
                <SubHeading className="mb-5" size="2xl">
                  {blog.title}
                </SubHeading>
                <Paragraph color="muted" size="sm" className="text-gray-600">
                  {blog.description}
                </Paragraph>
              </div>
              <div className="user-details mt-5">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                    src={blog.user.userImg}
                    alt=""
                  />
                  <div>
                    <Paragraph
                      color="default"
                      size="sm"
                      weight="bold"
                      className="blog-user"
                    >
                      {blog.user.userName}
                    </Paragraph>
                    <Paragraph
                      color="muted"
                      size="sm"
                      className="text-gray-600 blog-date{"
                    >
                      {blog.user.date}
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-10 text-center">
          <span className="inline-block cursor-pointer text-primary p-4 bg-surface-light">
            <ArrowDown className="inline-block" size={18} />
            Load more
          </span>
        </div> */}
      </section>

      {/* READY TO DRIVE */}
      <ReadytoDrive />
    </div>
  );
};

export default Blogs;
