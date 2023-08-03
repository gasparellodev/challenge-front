import { FC } from "react";
import { HomeIcon } from "../svg-components/home-icon";
import { BrandLogin } from "../svg-components/brand-login";

export const Navigation: FC = () => {
  const dataMock = {
    name: "Joao Santos",
    email: "johndue@gmail.com",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHMXuKFlW-Wsg/profile-displayphoto-shrink_800_800/0/1668219599625?e=2147483647&v=beta&t=v5j5kCUfjfC5IctNYRYqMIMp6PxJduNzqrhGdzA4icc",
  };
  return (
    <header className="bg-[#1E2126] fixed w-full flex justify-end  md:justify-between items-center">
      <BrandLogin className="hidden md:block" />
      <div className="flex items-center pr-10 pt-5 md:pt-0">
        <button>
          <HomeIcon />
        </button>
        <button
          type="button"
          className="relative inline-flex items-center p-3 pr-10 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-[#2A2E39] rounded-full p-1"
          >
            <path
              d="M13.5 1.5V2.4C16.9219 3.09516 19.5 6.12187 19.5 9.75V10.6313C19.5 12.8391 20.3109 14.9625 21.7734 16.6125L22.1203 17.0016C22.514 17.4469 22.6125 18.075 22.3687 18.6141C22.125 19.1531 21.5906 19.5 21 19.5H2.99999C2.40936 19.5 1.87363 19.1531 1.63166 18.6141C1.38969 18.075 1.48649 17.4469 1.87892 17.0016L2.22655 16.6125C3.69092 14.9625 4.49999 12.8391 4.49999 10.6313V9.75C4.49999 6.12187 7.03592 3.09516 10.5 2.4V1.5C10.5 0.671719 11.1703 0 12 0C12.8297 0 13.5 0.671719 13.5 1.5ZM12 24C11.2031 24 10.439 23.6859 9.87655 23.1234C9.31405 22.5609 8.99998 21.7547 8.99998 21H15C15 21.7547 14.6859 22.5609 14.1234 23.1234C13.5609 23.6859 12.7547 24 12 24Z"
              fill="#E7E7E7"
            />
          </svg>

          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary border-2 border-primary rounded-full -top-2 -right-2 dark:border-gray-900">
            1
          </div>
        </button>

        <button>
          <img
            className="rounded-full h-[33px] mr-5"
            alt={dataMock.email}
            src={dataMock.image}
          />
        </button>
        <p>{dataMock.email}</p>
      </div>
    </header>
  );
};
