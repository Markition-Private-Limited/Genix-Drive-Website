import frame from "../../assets/fframe.png";
import BlogBanner from "../../assets/blogbaner.jpg";
import userPlaceHolder from "../../assets/userPlaceHolder.png";
import user1 from "../../assets/bloguser1.png";
import user2 from "../../assets/bloguser2.png";
import user3 from "../../assets/bloguser3.png";
import user4 from "../../assets/bloguser4.png";
import user5 from "../../assets/bloguser5.png";
import user6 from "../../assets/bloguser6.png";


import { useNavigate } from "react-router-dom";

import blog1 from "../../assets/blogs/1.png";
import blog2 from "../../assets/blogs/2.png";
import blog3 from "../../assets/blogs/3.jpg";
import blog4 from "../../assets/blogs/4.jpg";
import blog5 from "../../assets/blogs/5.png";
import blog6 from "../../assets/blogs/6.jpg";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import ReadytoDrive from "../../components/web/ReadytoDrive";

const BlogsRecords = [
  {
    blogImg: blog1,
    category: "Social & Family Connect",
    title: "How GenixDrive is Redefining Family Safety and Smarter Driving in Pakistan",
    description:
      "Discover how GenixDrive uses advanced AI technology to monitor driving habits, ensuring your family's safety on the road. From real-time insights to smart risk prevention, we are bringing a new era of secure and efficient driving to Pakistan.",
    user: {
      userName: "Muhammad Sohaib",
      userImg:
        user1,
      date: "2026-02-10",
    },
  },
  {
    blogImg: blog2,
    category: "Safety & Protection",
    title: "what makes Genix Drive Different",
    description:
      "At first, it was just an idea of Erşad. Then we combined our skills and shaped AlignUI Design System over approximately 250 days. When I look back, I see nothing but hard work and dedication. That's the main reason why I wanted to write this blog, to inspire and inform.",
    user: {
      userName: "Umar Riaz",
      userImg:
        user2,
      date: "2026-02-08",
    },
  },
  {
    blogImg: blog3,
    category: "Driving Insights",
    title: "GPS Tracking: Keeping Families & Fleets Safe on Every Journey",
    description:
      "GPS tracking helps monitor vehicle location and ensures safety for families and fleet managers alike.",
    user: {
      userName: "Saad Rasheed",
      userImg:
        user3,
      date: "2026-02-06",
    },
  },
  {
    blogImg: blog4,
    category: "Driving Insights",
    title: "AI-Powered Driving Insights: Smarter Alerts, Safer Roads",
    description:
      "AI-powered insights are transforming driving experiences with predictive analytics and smart alerts.",
    user: {
      userName: "Bilal Hassan",
      userImg:
        user4,
      date: "2026-02-05",
    },
  },
  {
    blogImg: blog5,
    category: "Social & Family Connect",
    title: "Plan Smarter Road Trips with Connected Vehicle Data",
    description:
      "Use connected apps and vehicle data to plan efficient and enjoyable road trips with your loved ones.",
    user: {
      userName: "Farah Yousuf",
      userImg:
        user5,
      date: "2026-02-03",
    },
  },
  {
    blogImg: blog6,
    category: "Gamification & Rewards",
    title: "Maximizing EV Battery Life with Smart Monitoring Tools",
    description:
      "Learn how monitoring tools help optimize battery usage and performance in modern electric vehicles.",
    user: {
      userName: "Kinza Tariq",
      userImg:
        user6,
      date: "2026-02-01",
    },
  },
];

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="blogs">
      {/* BANNER */}
      {/* <div className="banner relative">
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
      </div> */}

      {/* BLOGS SECTION */}
      <section className="bg-white price-cards px-[56px] padding-50">
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
                Musharib Awan
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
                {/* <strong className="text-primary leading-5 mb-3 block">
                  {blog.category}
                </strong> */}
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
