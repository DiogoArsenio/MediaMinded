export default function Features() {
  return (
    <section id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-semibold">In today's digital landscape, social media can make or break a business.</h2>
            <p className="text-xl text-gray-400">
              Don't leave your online presence to chance. Partner with MediaMinded and take control of your social media success.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-gray-100" width="64" height="64" rx="32" />
                <path
                  className="stroke-current text-gray-800"
                  d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
                <path className="stroke-current text-gray-600" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2 text-center">Strategy development</h4>
              <p className="text-lg text-gray-400 text-center">
                We can work with clients to develop a social media strategy that is tailored to their unique needs and goals. This may include defining target
                audiences, selecting the most effective social media channels, creating content calendars, and establishing KPIs.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-gray-100" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path
                    className="stroke-current text-gray-800"
                    d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"
                  />
                  <circle className="stroke-current text-gray-600" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Analytics and reporting</h4>
              <p className="text-lg text-gray-400 text-center">
                We can track and analyze social media performance, providing clients with regular reports that include insights and recommendations for
                improving their social media presence.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-gray-100" width="64" height="64" rx="32" />
                <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <ellipse className="stroke-current text-gray-600" cx="11" cy="11" rx="5.5" ry="11" />
                  <path className="stroke-current text-gray-800" d="M11 0v22M0 11h22" />
                  <circle className="stroke-current text-gray-800" cx="11" cy="11" r="11" />
                </g>
              </svg>
              <h4 className="h4 mb-2 text-center">Community management:</h4>
              <p className="text-lg text-gray-400 text-center">
                We can manage social media communities on behalf of clients, including monitoring and responding to comments and messages, handling customer
                service inquiries, and engaging with followers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
