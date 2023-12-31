import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import MainLogo from "../../assets/nav_logo.png";

import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import FontAwesomeIcon from "font-awesome/css/font-awesome.min.css"

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  var FontAwesome = require("react-fontawesome");

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-20 w-auto" src={MainLogo} alt="ChefLogo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-700"
            onClick={() => setMobileMenuOpen(true)}
          ></button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#"
            className="text-sm leading-6 text-gray-600 underline-offset-8 active: text-black underline decoration-orange-400 decoration-4	"
          >
            Home
          </a>
          <a href="#" className="text-sm leading-6 text-gray-600">
            How It Works
          </a>
          <a href="#" className="text-sm leading-6 text-gray-600">
            Our Chefs
          </a>
          <a href="#" className="text-sm leading-6 text-gray-600">
            Book
          </a>
        </div>
        <div className="hidden lg:flex center lg:flex-1 lg:justify-end items-center gap-x-2 cursor-pointer">
          <FontAwesomeIcon icon={faUser} />
          <p className="text-stone-600">Sign Up | Login</p>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-20 w-auto" src={MainLogo} alt="ChefLogo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="text-sm leading-6 block text-gray-600 underline-offset-8 active: text-black underline decoration-orange-400 decoration-4	"
                >
                  Home
                </a>
                <a href="#" className="text-sm block leading-6 text-gray-600">
                  How It Works
                </a>
                <a href="#" className="text-sm block leading-6 text-gray-600">
                  Our Chefs
                </a>
                <a href="#" className="text-sm block leading-6 text-gray-600">
                  Book
                </a>
              </div>
              <div className="py-6 flex justify-between">
                <FontAwesomeIcon icon={faUser} />
                <p className="text-stone-600">Sign Up | Login</p>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
