import React from "react";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div className="w-full">
      <section className="container mx-auto mt-40 md:mt-40">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">Discover Your Future</h1>
          <p className="text-gray-400 text-lg">
            Explore jobs, internships, and interview experiences to kickstart
            your career.
          </p>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-5 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              <svg
                className="mx-auto mb-2"
                width="48"
                height="30"
                viewBox="0 0 48 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 28.5C30 29.3288 29.3288 30 28.5 30H19.5C18.6712 30 18 29.3288 18 28.5V24H0V37.5C0 39.9 2.1 42 4.5 42H43.5C45.9 42 48 39.9 48 37.5V24H30V28.5ZM43.5 9H36V4.5C36 2.1 33.9 0 31.5 0H16.5C14.1 0 12 2.1 12 4.5V9H4.5C2.1 9 0 11.1 0 13.5V21H48V13.5C48 11.1 45.9 9 43.5 9ZM30 9H18V6H30V9Z"
                  fill="white"
                />
              </svg>

              <h2 className="text-xl font-semibold mb-2">Jobs</h2>
              <p className="text-gray-400">
                Find and apply to the latest job openings.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              <svg
                className="mx-auto mb-2"
                width="48"
                height="30"
                viewBox="0 0 48 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.6755 7.29001L25.755 0.862511C24.615 0.51226 23.385 0.51226 22.2457 0.862511L1.32449 7.29001C-0.441009 7.83226 -0.441009 10.167 1.32449 10.7093L4.97174 11.8298C4.17149 12.819 3.67949 14.0258 3.63074 15.3473C2.90849 15.7613 2.39999 16.5083 2.39999 17.4C2.39999 18.2085 2.82599 18.8888 3.43949 19.3238L1.52474 27.9398C1.35824 28.689 1.92824 29.4 2.69549 29.4H6.90374C7.67174 29.4 8.24174 28.689 8.07524 27.9398L6.16049 19.3238C6.77399 18.8888 7.19999 18.2085 7.19999 17.4C7.19999 16.5323 6.71474 15.8063 6.02549 15.3848C6.08249 14.2583 6.65849 13.2623 7.57724 12.6308L22.245 17.1375C22.9245 17.346 24.228 17.6063 25.7542 17.1375L46.6755 10.71C48.4417 10.167 48.4417 7.83301 46.6755 7.29001ZM26.4592 19.4318C24.3195 20.0888 22.4962 19.7258 21.54 19.4318L10.6635 16.0905L9.59999 24.6C9.59999 27.2513 16.047 29.4 24 29.4C31.953 29.4 38.4 27.2513 38.4 24.6L37.3365 16.0898L26.4592 19.4318Z"
                  fill="white"
                />
              </svg>

              <h2 className="text-xl font-semibold mb-2">Internships</h2>
              <p className="text-gray-400">
                Gain valuable experience through internships.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              <svg
                className="mx-auto mb-2"
                width="48"
                height="30"
                viewBox="0 0 48 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.6667 13.6667C34.6667 6.30001 26.9083 0.333344 17.3333 0.333344C7.75833 0.333344 0 6.30001 0 13.6667C0 16.525 1.175 19.1583 3.16667 21.3333C2.05 23.85 0.208333 25.85 0.183333 25.875C0 26.0667 -0.05 26.35 0.0583333 26.6C0.166667 26.85 0.4 27 0.666667 27C3.71667 27 6.24167 25.975 8.05833 24.9167C10.7417 26.225 13.9167 27 17.3333 27C26.9083 27 34.6667 21.0333 34.6667 13.6667ZM44.8333 32C46.825 29.8333 48 27.1917 48 24.3333C48 18.7583 43.5417 13.9833 37.225 11.9917C37.3 12.5417 37.3333 13.1 37.3333 13.6667C37.3333 22.4917 28.3583 29.6667 17.3333 29.6667C16.4333 29.6667 15.5583 29.6 14.6917 29.5083C17.3167 34.3 23.4833 37.6667 30.6667 37.6667C34.0833 37.6667 37.2583 36.9 39.9417 35.5833C41.7583 36.6417 44.2833 37.6667 47.3333 37.6667C47.6 37.6667 47.8417 37.5083 47.9417 37.2667C48.05 37.025 48 36.7417 47.8167 36.5417C47.7917 36.5167 45.95 34.525 44.8333 32Z"
                  fill="white"
                />
              </svg>

              <h2 className="text-xl font-semibold mb-2">Interviews</h2>
              <p className="text-gray-400">
                Read about interview experiences from candidates.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg text-center hover:bg-gray-700 transition duration-300">
              <svg
                className="mx-auto mb-2"
                width="48"
                height="30"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.6819 6.95343L41.0466 1.31812C39.2888 -0.439697 36.4379 -0.439697 34.68 1.31812L29.3785 6.61968L41.3804 18.6216L46.6819 13.32C48.4397 11.5622 48.4397 8.71218 46.6819 6.95343ZM23.5444 5.02874C22.08 3.56437 19.7063 3.56437 18.2419 5.02874L7.10629 16.1653C6.52035 16.7512 6.52035 17.7009 7.10629 18.2859L9.22785 20.4075C9.81379 20.9934 10.7635 20.9934 11.3494 20.4075L20.895 10.8619L23.0166 12.9825L8.80785 27.1903C3.88629 32.1119 0.785762 38.5616 0.0159791 45.479L0.0131666 45.5006C-0.146208 46.9331 1.0641 48.1444 2.4966 47.9859C9.42297 47.2211 15.8821 44.1195 20.8097 39.1922L39.2588 20.7431L31.4991 12.9834L23.5444 5.02874Z"
                  fill="white"
                />
              </svg>

              <h2 className="text-xl font-semibold mb-2">Blogs</h2>
              <p className="text-gray-400">
                Stay updated with career tips and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 mb-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-3">Add Your Contributions</h2>
          <p className="text-gray-400">
            Share your experiences and help others on their career journey.
          </p>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          <a
            href="/job/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Add Jobs
          </a>
          <a
            href="/internship/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Add Internships
          </a>
          <a
            href="/interview/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Add Interview Experience
          </a>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default LandingPage;
