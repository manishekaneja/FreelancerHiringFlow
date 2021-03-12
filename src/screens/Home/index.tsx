import girlImage from "../../assets/images/girl-using-laptop.png";
import Layout from "../../components/Layout";
import { Title } from "../../components/Title";
import { WhiteCard } from "../../components/WhiteCard";
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
            <Title title="why us" />
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
            <Title title="companies who trust us" />
          </div>
          <div></div>
        </section>
      </article>
    </Layout>
  );
};

export default HomeScreen;
