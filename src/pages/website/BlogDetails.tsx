import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import { useNavigate } from "react-router-dom";

import blog1 from "../../assets/blogs/1.png";
import blog2 from "../../assets/blogs/2.png";
import blog3 from "../../assets/blogs/3.jpg";
import blog4 from "../../assets/blogs/4.jpg";
import blog5 from "../../assets/blogs/5.png";
import blog6 from "../../assets/blogs/6.jpg";
import user1 from "../../assets/bloguser1.png";
import user2 from "../../assets/bloguser2.png";
import user3 from "../../assets/bloguser3.png";
import user4 from "../../assets/bloguser4.png";
import user5 from "../../assets/bloguser5.png";
import user6 from "../../assets/bloguser6.png";

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

const BlogDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="blog-details px-[56px] py-[20px] padding-50">
        <div className="blog-details-container mt-8 max-w-6xl mx-auto">
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

          <div className="mt-5 flex justify-center">
            <img
              className="w-full max-w-6xl object-cover object-[50%_0%] rounded-2xl"
              src={blog1}
              alt=""
            />
          </div>
          <div className="mt-8 max-w-6xl mx-auto blog-content space-y-6">

            {/* Intro */}
            <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
              In today's fast-paced world, staying connected and safe on the road has become more important than ever.
              That's where GenixDrive steps in — a smart driving companion that blends safety, technology, and rewards
              to make every journey meaningful.
            </Paragraph>

            {/* What Makes GenixDrive Different */}
            <div>
              <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
                What Makes GenixDrive Different?
              </SubHeading>
              <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                GenixDrive isn't just another tracking app — it's an all-in-one driving safety and telematics solution
                that protects you, your loved ones, and your vehicle. Whether you're a parent ensuring your child's
                safe arrival or a driver who values smart vehicle care, GenixDrive brings peace of mind through
                real-time insights.
              </Paragraph>
            </div>

            {/* Key Highlights */}
            <div>
              <SubHeading size="xl" color="dark" weight="bold" className="mb-4">
                Key Highlights
              </SubHeading>
              <div className="space-y-5">
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    1. Family Safety at the Core
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    Stay connected with real-time location sharing, trip history, and place notifications.
                    Parents can relax knowing their kids are safe on the road, while drivers can easily
                    coordinate meetups or track their loved ones' journeys.
                  </Paragraph>
                </div>
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    2. Advanced Safety &amp; Protection
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    From crash detection and geo-fencing to anti-theft alerts and driving behavior monitoring,
                    GenixDrive ensures complete safety coverage for drivers and vehicles.
                  </Paragraph>
                </div>
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    3. Driving Insights that Matter
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    Every trip is analyzed using AI and telematics, turning your driving habits — like speed,
                    acceleration, and braking — into clear scores and insights. It's like having a personal
                    safety coach with you every time you drive.
                  </Paragraph>
                </div>
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    4. Smart Vehicle Care
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    Your vehicle is an investment — protect it. GenixDrive's Smart Vehicle Care monitors
                    your car's health, detects potential issues early, and helps you maintain it for
                    long-term reliability.
                  </Paragraph>
                </div>
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    5. Gamification &amp; Rewards
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    Safe driving pays off — literally. Earn points for responsible driving behavior and
                    redeem them for vouchers, coupons, or other exciting rewards. GenixDrive turns
                    safety into motivation.
                  </Paragraph>
                </div>
              </div>
            </div>

            {/* Why Trust */}
            <div>
              <SubHeading size="xl" color="dark" weight="bold" className="mb-3">
                Why Drivers and Families Trust GenixDrive
              </SubHeading>
              <ul className="space-y-2 list-none">
                {[
                  { label: "All-in-One Solution", text: "One app, multiple benefits — safety, insights, and connectivity." },
                  { label: "Real-Time Alerts", text: "Stay informed about your family's journeys and your vehicle's status." },
                  { label: "Data Privacy First", text: "Your data stays private and secure — always." },
                  { label: "Motivation Through Rewards", text: "Drive better, earn more, and make safety a habit." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                      <strong>{item.label}:</strong> {item.text}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>

            {/* Final Thoughts */}
            <div>
              <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
                Final Thoughts
              </SubHeading>
              <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                GenixDrive is more than an app — it's your digital co-pilot, helping you drive safer, care smarter,
                and connect deeper with those who matter. Every trip becomes an opportunity to build safer habits,
                protect your loved ones, and earn rewards along the way.
              </Paragraph>
            </div>

          </div>
        </div>
      </section>

      <section className="px-[56px] py-[30px] padding-50">
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
      </section>
    </div>
  );
};

export default BlogDetails;
