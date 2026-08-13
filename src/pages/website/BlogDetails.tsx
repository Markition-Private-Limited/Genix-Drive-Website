import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

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
    title: "What Makes Genix Drive Different",
    description:
      "What truly sets GenixDrive apart is our relentless commitment to merging cutting-edge AI technology with real-world safety needs. While many apps provide basic tracking, we dive deeper into driver behavior analytics, risk assessment, and proactive protection.",
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
      "GPS tracking has become an essential tool in modern transportation, offering far more than just location tracking. It provides real-time monitoring, geofencing capabilities, and detailed route history, ensuring maximum safety for families and optimized operations for fleet managers.",
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
    title: "Plan Smarter Trips with Connected Vehicle Data",
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
    category: "Safety & Technology",
    title: "GenixDrive and the Future of Vehicle Safety: What Punjab's QR SOS System Gets Right",
    description:
      "Punjab's QR panic button is making public transport safer with a single scan. GenixDrive brings that same connected-safety mindset to private vehicles, giving owners real visibility into their vehicles and the people who matter to them.",
    user: {
      userName: "Kinza Tariq",
      userImg:
        user6,
      date: "2026-02-01",
    },
  },
];


const BlogContent0 = () => (
  <div className="mt-8 max-w-[1240px] mx-auto blog-content space-y-6">


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
              {/* <SubHeading size="xl" color="dark" weight="bold" className="mb-4">
                Key Highlights
              </SubHeading> */}
              <div className="space-y-5">
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    Advanced Protection & Family Safety at the Core
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    Stay connected with real-time location sharing, trip history, and place notifications.
                    Parents can relax knowing their kids are safe on the road, while drivers can easily
                    coordinate meetups or track their loved ones' journeys.
                    <br />
                    From crash detection and geo-fencing to anti-theft alerts and driving behavior monitoring,
                    GenixDrive ensures complete safety coverage for drivers and vehicles.
                  </Paragraph>
                </div>
                {/* <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    2. Advanced Safety &amp; Protection
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    From crash detection and geo-fencing to anti-theft alerts and driving behavior monitoring,
                    GenixDrive ensures complete safety coverage for drivers and vehicles.
                  </Paragraph>
                </div> */}
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    Driving Insights & Smart Vehicle Care
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    Every trip is analyzed using AI and telematics, turning your driving habits — like speed,
                    acceleration, and braking — into clear scores and insights. It's like having a personal
                    safety coach with you every time you drive.
                    < br />
                    Your vehicle is an investment — protect it. GenixDrive's Smart Vehicle Care monitors
                    your car's health, detects potential issues early, and helps you maintain it for
                    long-term reliability.
                  </Paragraph>
                </div>
                {/* <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    Smart Vehicle Care
                  </SubHeading>
                  <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
                    Your vehicle is an investment — protect it. GenixDrive's Smart Vehicle Care monitors
                    your car's health, detects potential issues early, and helps you maintain it for
                    long-term reliability.
                  </Paragraph>
                </div> */}
                <div>
                  <SubHeading size="lg" color="dark" weight="semibold" className="mb-1">
                    Gamification &amp; Rewards
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
);

const BlogContent5 = () => (
  <div className="mt-8 max-w-[1240px] mx-auto blog-content space-y-6">
    <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
      A passenger on a Lahore bus now has an option that didn't exist a year ago: scan a QR
      code and reach help in seconds. That small change reflects a bigger shift in how we think
      about vehicle safety. It's no longer just about crash prevention. It's about whether someone
      can get help, visibility, or reassurance the moment they need it.
    </Paragraph>

    <div>
      <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
        Vehicle Safety Is Bigger Than Crash Prevention
      </SubHeading>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
        Most safety concerns car owners actually face have nothing to do with collisions:
      </Paragraph>
      <ul className="space-y-2 list-none mt-2">
        {[
          "Vehicle theft or unauthorized use",
          "Unexplained changes in a vehicle's location or route",
          "Emergencies during a journey",
          "Situations where a phone call isn't practical",
          "A family member simply wanting to know a trip is going as expected",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
              {item}
            </Paragraph>
          </li>
        ))}
      </ul>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed mt-4">
        These are everyday concerns, and they're exactly where connected platforms like
        GenixDrive add value: not by preventing every incident, but by giving owners the visibility to
        notice problems early and respond fast.
      </Paragraph>
    </div>

    <div>
      <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
        Punjab's QR Panic Button: A Real-World Proof Point
      </SubHeading>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
        The Punjab Safe Cities Authority (PSCA) has rolled out a QR-based panic button system
        across the province's public transport network, covering buses, vans, rickshaws, and taxis,
        under the Digital Punjab initiative. It launched in phases: rickshaws in Lahore first, then
        Rawalpindi, then integration with Metro, Speedo, and electric buses across Lahore,
        Rawalpindi, and Multan.
        <br /><br />
        A passenger scans a QR code inside the vehicle and gets verified details about the vehicle,
        driver, and route, plus direct access to emergency calling, video calling, live chat, and
        location sharing with the Safe Cities network. In an emergency, the same code connects the
        passenger to a dedicated helpline with the vehicle's live location already attached.
        <br /><br />
        The real innovation here isn't the QR code. It's removing friction between a person and the
        help they need, exactly when they're least equipped to navigate anything complicated.
      </Paragraph>
    </div>

    <div>
      <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
        Why This Matters Beyond Public Transport
      </SubHeading>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
        If a QR code can make a rickshaw or bus safer, the same logic applies to private cars, family
        vehicles, corporate fleets, school transport, and ride-sharing. Theft, unauthorized use, and
        emergencies aren't unique to public transport. They're everyday risks for private vehicle
        owners too, and that's precisely the space GenixDrive operates in.
      </Paragraph>
    </div>

    <div>
      <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
        How GenixDrive Builds That Visibility Today
      </SubHeading>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
        GenixDrive already brings that same connected-safety thinking to private vehicles, built
        around real-time visibility instead of a single scan-and-alert moment. Here's what that looks
        like today:
      </Paragraph>
      <ul className="space-y-2 list-none mt-2">
        {[
          "Trip tracking that logs every journey a vehicle takes",
          "Live location tracking for real-time visibility",
          "Driving behavior and safety insights, including patterns like harsh braking or speeding",
          "Driving scores that summarize how a vehicle is driven over time",
          "Geofencing to define safe zones and get alerted when a vehicle leaves them",
          "Trusted connections, so family members or fleet managers can stay informed",
          "Vehicle and location visibility, giving owners a clear picture at all times",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
              {item}
            </Paragraph>
          </li>
        ))}
      </ul>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed mt-4">
        What it does is close the awareness gap: instead of discovering a problem hours later, a
        GenixDrive user sees it as it happens and can act immediately.
      </Paragraph>
    </div>

    <div>
      <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
        Where Connected Safety Is Headed
      </SubHeading>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
        Picture these pieces working together: a QR-based emergency entry point, live location
        tracking, trusted-contact alerts, geofencing, and rapid response, all connected instead of
        separate. Punjab's rollout proves this kind of system works at scale for public transport.
        Private vehicles are the natural next step, and it's the direction GenixDrive is building toward:
        helping owners move from simply owning a car to actively understanding and monitoring it.
      </Paragraph>
    </div>

    <div>
      <SubHeading size="xl" color="dark" weight="bold" className="mb-2">
        The Road Ahead
      </SubHeading>
      <Paragraph color="default" size="sm" weight="medium" className="leading-relaxed">
        Vehicle safety today is about visibility and access to help before, during, and after a journey,
        not just crash outcomes. Punjab's QR panic button shows what's possible when accessible
        technology meets a real safety need. GenixDrive brings that same standard of connected
        awareness to the vehicles people drive every day.
        <br /><br />
        See your vehicle's journeys more clearly. Explore what GenixDrive can do for you.
      </Paragraph>
    </div>
  </div>
);

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const blogIndex = parseInt(id || "0", 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // As requested: 0 to 4 blogs keep the first blog's details (picture, icon, author name, content)
  // while the last blog (5) shows its own details and content.
  const currentBlog = blogIndex === 5 ? BlogsRecords[5] : BlogsRecords[0];

  const renderBlogContent = () => {
    if (blogIndex === 5) return <BlogContent5 />;
    return <BlogContent0 />;
  };

  return (
    <div>
      <section className="blog-details px-[10px] md:px-[100px] py-[10px]">
        <div className="blog-details-container mt-8 max-w-[1240px] mx-auto">
          <SubHeading size="2xl" color="dark" className="mb-1 mainheading">
            {currentBlog.title}
          </SubHeading>
          <div className="flex items-center">
            <img
              className="w-8 h-8 rounded-full mr-2 object-cover"
              src={currentBlog.user.userImg}
              alt=""
            />

            <Paragraph color="default" size="sm" weight="bold">
              {currentBlog.user.userName}
            </Paragraph>
            <Paragraph color="default" size="sm" className="text-gray-600">
              {currentBlog.user.date}
            </Paragraph>
          </div>

          <div className="mt-5 flex justify-center">
            <img
              className="w-full max-w-[1240px] object-cover object-[50%_0%] rounded-2xl"
              src={currentBlog.blogImg}
              alt=""
            />
          </div>
          {renderBlogContent()}
        </div>
      </section>


      <section className="px-[10px] md:px-[100px] py-[30px] pb-[80px] padding-50">
        <div className="max-w-[1240px] mx-auto">
          <SubHeading size="4xl" color="dark" className="mb-5">
            Related Blogs
          </SubHeading>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {BlogsRecords.map((blog, index) => (
              <div
                onClick={() => navigate(`/blogs/${index}`)}
                key={index}
                className="blog-card-container cursor-pointer bg-white p-5 rounded-2xl shadow-2xl flex flex-col"
              >
                <div className="blog-img mb-4">
                  <img
                    className="w-full h-[240px] object-cover object-[50%_0%] rounded-2xl"
                    src={blog.blogImg}
                    alt=""
                  />
                </div>
                <div className="blog-deta flex-grow blogsrecords">
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
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
