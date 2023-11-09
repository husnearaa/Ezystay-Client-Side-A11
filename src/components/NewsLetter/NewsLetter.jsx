const NewsLetter = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-100 mt-10 mb-10 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/4spddQW/room6.png)' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-white">
              <div className="mx-auto max-w-screen-md sm:text-center">
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Subscribe to our newsletter</h2>
                <p className="mx-auto mb-8 text-lg font-light md:mb-12">
                  Leave your e-mail in the form below to sign up for our newsletter and receive regular
                  news, updates, and special offers.
                </p>
                <form action="#">
                  <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                    <div className="relative w-full">
                      <label className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                      </div>
                      <input
                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg"
                        placeholder="Enter your email"
                        type="email"
                        id="email"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#C2A973] border-[#C2A973] sm:rounded-none sm:rounded-r-lg"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsLetter;
