import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="w-full">
      <div>
        <span className=" mx-5 my-1 h-7 cursor-pointer border border-gray-500 text-sm rounded-full flex sm:hidden ">
          <input
            type="search"
            name="search"
            placeholder="Search "
            className="flex-grow px-4  text-gray-500 rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
        </span>
      </div>
      <section class="text-gray-600 ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-xll font-semibold mb-4  text-gray-900">
              Shopping when you want
              <br class="hidden lg:inline-block" /> from where you want
            </h1>
            <p class="mb-8 text-base leading-relaxed">
              Wide range of products and services
              <br />
              Time saving is one of the prime benefits of online shopping.
            </p>
            <div class="flex justify-center"></div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="assets/hero.svg"
            />
          </div>
        </div>
      </section>

      {/* product id,title,price,rating,image */}
      <section class="text-gray-600 body-font">
        <div class="   py-24 ">
          <div class="flex flex-wrap ">
            <Product
              id="1"
              company="Apple"
              title="iPad Pro"
              price={1200}
              image="assets/iPad Pro.jpg"
            />
            <Product
              id="2"
              company="Apple"
              title="Apple Watch Series 3"
              price={189.99}
              image="assets/Apple Watch Series 3.jpg"
            />
            <Product
              id="3"
              company="Apple"
              title="iPhone 12 Pro Max"
              price={1300.0}
              image="assets/iPhone 12 Pro Max.jpg"
            />
            <Product
              id="4"
              company="Apple"
              title="iPhone 11 Pro"
              price={700.0}
              image="assets/iPhone 11 Pro.jpg"
            />
            <Product
              id="5"
              company="Apple"
              title="iPhone XS Max"
              price={445.0}
              image="assets/iPhone XS Max.jpg"
            />
            <Product
              id="6"
              company="Apple"
              title="MacBook Air"
              price={749.99}
              image="assets/MacBook Air.jpg"
            />
            <Product
              id="7"
              company="Apple"
              title="iPad Mini"
              price={649.0}
              image="assets/iPad Mini.jpg"
            />
            <Product
              id="8"
              company="Apple"
              title="iPad Air"
              price={509.99}
              image="assets/iPad Air.jpg"
            />
            <Product
              id="9"
              company="samsung"
              title="Galaxy Z Flip 3"
              price={924.99}
              image="assets/Galaxy Z Flip 3.jpg"
            />
            <Product
              id="10"
              company="samsung"
              title="Galaxy S20"
              price={669.99}
              image="assets/Galaxy S20.jpg"
            />
            <Product
              id="11"
              company="samsung"
              title="Galaxy A32"
              price={269.0}
              image="assets/Galaxy A32.jpg"
            />
            <Product
              id="12"
              company="samsung"
              title="Galaxy S21 Ultra"
              price={1186}
              image="assets/Galaxy S21 Ultra.jpg"
            />
            <Product
              id="13"
              company="samsung"
              title=" Galaxy Buds Plus"
              price={99.0}
              image="assets/Galaxy Buds Plus.jpg"
            />
            <Product
              id="14"
              company="samsung"
              title="Galaxy A12"
              price={179.99}
              image="assets/Galaxy A12.jpg"
            />
            <Product
              id="15"
              company="samsung"
              title="Galaxy Watch 4 Classic"
              price={343.42}
              image="assets/Galaxy Watch 4 Classic.jpg"
            />
            <Product
              id="16"
              company="samsung"
              title="Galaxy A51"
              price={359.0}
              image="assets/Galaxy A51.jpg"
            />
            <Product
              id="17"
              company="samsung"
              title="Galaxy S9"
              price={178.0}
              image="assets/Galaxy S9.jpg"
            />
            <Product
              id="18"
              company="samsung"
              title="Galaxy S10+"
              price={322.0}
              image="assets/Galaxy S10+.jpg"
            />
            <Product
              id="19"
              company="samsung"
              title="Galaxy Note 10"
              price={384.0}
              image="assets/Galaxy Note 10.jpg"
            />
            <Product
              id="20"
              company="samsung"
              title="Galaxy Note 9"
              price={274.0}
              image="assets/Galaxy Note 9.jpg"
            />
            <Product
              id="21"
              company="samsung"
              title="Galaxy A71"
              price={328.0}
              image="assets/Galaxy A71.jpg"
            />
            <Product
              id="22"
              company="samsung"
              title="Galaxy Note20"
              price={937.05}
              image="assets/Galaxy Note20.jpg"
            />
            <Product
              id="23"
              company="Xiaomi"
              title="Mi 11 Lite"
              price={342.39}
              image="assets/Mi 11 Lite.jpg"
            />

            <Product
              id="24"
              company="Xiaomi"
              title="Redmi Note 10 Pro"
              price={344.57}
              image="assets/Redmi Note 10 Pro.jpg"
            />
            <Product
              id="25"
              company="Xiaomi"
              title="Mi 10T"
              price={385.0}
              image="assets/Mi 10T.jpg"
            />
            <Product
              id="26"
              company="Xiaomi"
              title="Redmi 9"
              price={189.5}
              image="assets/Redmi 9.jpg"
            />
            <Product
              id="27"
              company="Xiaomi"
              title="Redmi Note 9T"
              price={229.5}
              image="assets/Redmi Note 9T.jpg"
            />
            <Product
              id="28"
              company="Xiaomi"
              title="Poco X3 NFC"
              price={227.5}
              image="assets/Poco X3 NFC.jpg"
            />
            <Product
              id="29"
              company="Xiaomi"
              title="POCO M3"
              price={400}
              image="assets/POCO M3.jpg"
            />
            <Product
              id="30"
              company="Oppo"
              title="A74"
              price={339.99}
              image="assets/A74.jpg"
            />
            <Product
              id="31"
              company="Oppo"
              title="A31"
              price={189.99}
              image="assets/A31.jpg"
            />
            <Product
              id="32"
              company="Oppo"
              title="A54"
              price={298}
              image="assets/A54.jpg"
            />
            <Product
              id="33"
              company="Oppo"
              title="A15"
              price={205}
              image="assets/A15.jpg"
            />
            <Product
              id="34"
              company="Oppo"
              title="Reno 6 Pro"
              price={400}
              image="assets/Reno 6 Pro.jpg"
            />
            <Product
              id="35"
              company="Oppo"
              title="Find X3 Lite"
              price={483.16}
              image="assets/Find X3 Lite.jpg"
            />
            <Product
              id="36"
              company="Oppo"
              title="R17 PRO"
              price={500}
              image="assets/R17 PRO.jpg"
            />
          </div>
        </div>
      </section>
      <footer className="container mx-auto flex  ">
        <h1 className="text-xl mx-auto mb-5">
          powered by <span className="dd mr-2">Romany Tawfeek Aziz</span>
        </h1>
      </footer>
    </div>
  );
}

export default Home;
