const Subscribe = () => {
    return (
      <section className="bg-white text-gray-900 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer">
                How do I book a tutor?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  To book a tutor, search for your desired subject, choose a tutor
                  from the list, and click "Book Now." You can then select a date
                  and time for your session.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer">
                What is the cancellation policy?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  You can cancel or reschedule your session up to 24 hours before
                  the scheduled time. Please review our full cancellation policy
                  in the Terms and Conditions section.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer">
                Can I request a free trial session?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Some tutors offer a free trial session. You can check their
                  profiles to see if this option is available and book accordingly.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer">
                Are the tutors verified?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes, all tutors go through a thorough verification process,
                  including identity checks, qualifications, and experience
                  verification.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer">
                Can I filter tutors by language or expertise?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes, you can use our advanced search filters to find tutors
                  based on subject, language, experience, and even ratings.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    );
  };
  
  export default Subscribe;
  