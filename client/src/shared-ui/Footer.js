import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="w-full p-10 bg-neutral-900">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray"
              className="transition-colors text-white font-semibold hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray"
              className="text-white font-semibold transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray"
              className="text-white font-semibold transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <Typography
        color="blue-gray"
        className="text-center text-white font-bold mt-10"
      >
        &copy; 2024 LinguaKonnect
      </Typography>
    </footer>
  );
}
