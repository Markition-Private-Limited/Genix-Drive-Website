import Hero from "../../components/Hero";
import FeaturesStrip from "../../components/FeaturesStrip";
import AboutSection from "../../components/AboutSection";
// import BenefitsSection from "../../components/BenefitsSection";
import FeaturesBuild from "../../components/FeaturesBuild";
import SignupFlow from "../../components/web/SignupFlow";
import ReadytoDrive from "../../components/web/ReadytoDrive";
import SectionHeading from "../../components/web/SectionHeading";
import cric from "../../assets/circ.png";
import user1 from "../../assets/bloguser1.png";
import user2 from "../../assets/bloguser2.png";

import blog1 from "../../assets/blogs/1.png";
import blog2 from "../../assets/blogs/2.png";
import SubHeading from "../../components/sharedui/SubHeading";
import Paragraph from "../../components/sharedui/Paragraph";
import { useNavigate } from "react-router-dom";
// import { Timer } from "lucide-react";

const Home = () => {
  const BlogsRecords = [
    {
      blogImg: blog1,
      category: "Telematics",
      title:
        "How GenixDrive is Redefining Family Safety and Smarter Driving in Pakistan",
      description:
        "Discover how GenixDrive uses advanced AI technology to monitor driving habits, ensuring your family's safety on the road. From real-time insights to smart risk prevention, we are bringing a new era of secure and efficient driving to Pakistan.",
      user: {
        userName: "Muhammad Sohaib",
        userImg: user1,
        date: "2026-02-10",
        readTime: "4 min read",
      },
    },
    {
      blogImg: blog2,
      category: "Maintenance",
      title: "what makes Genix Drive Different",
      description:
        "At first, it was just an idea of Erşad. Then we combined our skills and shaped AlignUI Design System over approximately 250 days. When I look back, I see nothing but hard work and dedication. That's the main reason why I wanted to write this blog, to inspire and inform.",
      user: {
        userName: "Umar Riaz",
        userImg: user2,
        date: "2026-02-08",
        readTime: "5 min read",
      },
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-primary">
      <Hero />
      <FeaturesStrip />
      <AboutSection bg="white" />
      {/* <BenefitsSection /> */}
      <FeaturesBuild />
      <SignupFlow />
      {/* BLOGS */}
      <section className="px-[56px] py-[120px] bg-surface-light padding-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            className="mb-20 paratExt"
            paraText="Stay updated with the latest tips, insights, and stories on safe driving, family protection, and smart vehicle care. Our blog is designed to help drivers and families make every journey smarter, safer, and more rewarding."
          >
            From the GenixDrive
            <div className="inline-block relative ml-5 p-2">
              <p>Blog</p>
              <img
                src={cric}
                alt="circle"
                className="absolute left-[70px] blogdoodle top-1/2 -translate-1/2 max-w-[193px] h-[112px]"
              />
            </div>
          </SectionHeading>

          <div className="flex flex-wrap justify-center gap-5  items-stretch">
            {BlogsRecords.map((blog, index) => (
              <div
                onClick={() => navigate(`/blogs/${index}`)}
                key={index}
                className="w-full h-[670px] flex-1 max-w-sm blog-card-container cursor-pointer bg-white p-5 rounded-2xl shadow-2xl"
              >
                <div className="blog-img mb-4">
                  <img
                    className="w-full h-[240px]  object-cover object-[50%_0%] rounded-2xl"
                    src={blog.blogImg}
                    alt=""
                  />
                </div>
                <div className="blog-deta">
                  {/* <strong className="text-primary leading-5 mb-3 block blog-category">
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                        src={blog.user.userImg}
                        alt=""
                      />
                      <div>
                        <Paragraph
                          className="blog-user"
                          color="default"
                          size="sm"
                          weight="bold"
                        >
                          {blog.user.userName}
                        </Paragraph>
                        <Paragraph
                          color="muted"
                          size="sm"
                          className="text-gray-600 blog-date"
                        >
                          {blog.user.date}
                        </Paragraph>
                      </div>
                    </div>
                    {/* <p className="text-xs text-gray-600 flex items-center gap-1 justify-center">
                      <Timer size={16} /> {blog.user.readTime}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReadytoDrive />
    </div>
  );
};

export default Home;
