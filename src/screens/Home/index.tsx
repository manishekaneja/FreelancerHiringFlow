import { FC } from "react";
import girlImage from "../../assets/images/girl-using-laptop.png";
import Layout from "../../components/Layout";
const HomeScreen = () => {
  return (
    <Layout>
      <article className="px-28">
        <section className="flex items-center justify-between my-14">
          <div className="flex-1 ">
            <h1 className="font-medium my-5 text-white text-6xl">
              <span>Welcome to My</span>
              <span className="primary">Jobs</span>
            </h1>
            <button className="primary-button">Get Started</button>
          </div>
          <div className="max-w-2xl max-h-96 overflow-hidden rounded-2xl shadow-md">
            <img
              className="w-full h-full"
              src={girlImage}
              alt="girl-using-laptop"
            />
          </div>
        </section>
        <section className="mb-12">
          <div>
            <SubTitle title="why us" />
          </div>
          <div className="flex flex-row flex-wrap justify-between">
            {([
              {
                title: "Get more visibility",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
              },
              {
                title: "Organize your candidates",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
              {
                title: "Verify their abilities",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
              },
            ] as Array<{ title: string; content: string }>).map(
              (cardContent, idx) => (
                <WhiteCard {...cardContent} key={idx} />
              )
            )}
          </div>
        </section>
        <section>
          <div>
            <SubTitle title="companies who trust us" />
          </div>
          <div></div>
        </section>
      </article>
    </Layout>
  );
};

export default HomeScreen;

const WhiteCard: FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <div className="rounded-md px-5 shadow-lg bg-white my-5 max-w-xs">
    <h3 className="primary text-2xl font-medium my-4">{title}</h3>
    <p className="p-0 m-0 secondary pb-7 text-sm">{content}</p>
  </div>
);

const SubTitle: FC<{ title: string }> = ({ title }) => (
  <h4 className="capitalize secondary font-semibold text-2xl">{title}</h4>
);
