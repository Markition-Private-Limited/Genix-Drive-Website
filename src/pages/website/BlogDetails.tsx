import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import { useNavigate } from "react-router-dom";

import blog1 from "../../assets/blogs/1.jpg";
import blog2 from "../../assets/blogs/2.png";
import blog3 from "../../assets/blogs/3.jpg";
import blog4 from "../../assets/blogs/4.jpg";
import blog5 from "../../assets/blogs/5.jpg";
import blog6 from "../../assets/blogs/6.jpg";

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

const BlogDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="blog-details px-[56px] py-[120px] padding-50">
        <div className="blog-details-conta">
          <SubHeading size="2xl" color="dark" className="mb-1 mainheading">
            How GenixDrive is Redefining Family Safety and Smarter Driving in
            Pakistan
          </SubHeading>
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2 object-cover"
              src={BlogsRecords[0].user.userImg}
              alt=""
            />

            <Paragraph color="default" size="sm" weight="bold">
              {BlogsRecords[0].user.userName}
            </Paragraph>
            <Paragraph color="default" size="sm" className="text-gray-600">
              {BlogsRecords[0].user.date}
            </Paragraph>
          </div>

          <div className="mt-5">
            <img
              className="w-full object-cover object-[50%_0%] rounded-2xl "
              src={blog1}
              alt=""
            />
          </div>
          <div className="mt-5">
            <Paragraph
              color="default"
              size="sm"
              weight="medium"
              className="leading-relaxed blogdetailestext"
            >
              In today’s fast-paced world, staying connected and safe on the
              road has become more important than ever. That’s where GenixDrive
              steps in — a smart driving companion that blends safety,
              technology, and rewards to make every journey meaningful. What
              Makes GenixDrive Different? GenixDrive isn’t just another tracking
              app — it’s an all-in-one driving safety and telematics solution
              that protects you, your loved ones, and your vehicle. Whether
              you’re a parent ensuring your child’s safe arrival or a driver who
              values smart vehicle care, GenixDrive brings peace of mind through
              real-time insights. Key Highlights 1. Family Safety at the Core
              Stay connected with real-time location sharing, trip history, and
              place notifications. Parents can relax knowing their kids are safe
              on the road, while drivers can easily coordinate meetups or track
              their loved ones’ journeys. 2. Advanced Safety & Protection From
              crash detection and geo-fencing to anti-theft alerts and driving
              behavior monitoring, GenixDrive ensures complete safety coverage
              for drivers and vehicles. 3. Driving Insights that Matter Every
              trip is analyzed using AI and telematics, turning your driving
              habits — like speed, acceleration, and braking — into clear scores
              and insights. It’s like having a personal safety coach with you
              every time you drive. 4. Smart Vehicle Care Your vehicle is an
              investment — protect it. GenixDrive’s Smart Vehicle Care monitors
              your car’s health, detects potential issues early, and helps you
              maintain it for long-term reliability. 5. Gamification & Rewards
              Safe driving pays off — literally. Earn points for responsible
              driving behavior and redeem them for vouchers, coupons, or other
              exciting rewards. GenixDrive turns safety into motivation. Why
              Drivers and Families Trust GenixDrive All-in-One Solution: One
              app, multiple benefits — safety, insights, and connectivity.
              Real-Time Alerts: Stay informed about your family’s journeys and
              your vehicle’s status. Data Privacy First: Your data stays private
              and secure — always. Motivation Through Rewards: Drive better,
              earn more, and make safety a habit. Final Thoughts GenixDrive is
              more than an app — it’s your digital co-pilot, helping you drive
              safer, care smarter, and connect deeper with those who matter.
              Every trip becomes an opportunity to build safer habits, protect
              your loved ones, and earn rewards along the way.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="px-[56px] py-[120px] padding-50">
        <SubHeading size="2xl" color="dark" className="mb-5">
          Related Blogs
        </SubHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BlogsRecords.map((blog, index) => (
            <div
              onClick={() => navigate(`/blogs/${index}`)}
              key={index}
              className="blog-card-container cursor-pointer bg-white p-5 rounded-2xl shadow-2xl"
            >
              <div className="blog-img mb-4">
                <img
                  className="w-full h-[240px] object-cover object-[50%_0%] rounded-2xl"
                  src={blog.blogImg}
                  alt=""
                />
              </div>
              <div className="blog-deta">
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
      </section>
    </div>
  );
};

export default BlogDetails;
