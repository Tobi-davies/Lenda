import React from "react";
import styles from "../../styles/Header.module.css";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { CustomBtn } from "../customBtn/customBtn";

const navItems = [
  {
    title: "Home",
    path: "/",
  },

  {
    title: "Liquidity",
    path: "/resources",
    subs: [
      {
        title: "Deposit Matic",
        path: "/",
      },
      {
        title: "Borrow Matic",
        path: "/",
      },
      {
        title: "Buy NFT",
        path: "/",
      },
      {
        title: "Sell NFT",
        path: "/",
      },
    ],
  },
  {
    title: "Yield",
    path: "/yield",
  },
  {
    title: "Community",
    path: "/community",
    subs: [
      {
        title: "Twitter",
        path: "/",
      },
      {
        title: "Telegram",
        path: "/",
      },
      {
        title: "Discord",
        path: "/",
      },
      {
        title: "Instagram",
        path: "/",
      },
      {
        title: "LinkedIn",
        path: "/",
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    subs: [
      {
        title: "Lend protocol",
        path: "/",
      },
      {
        title: "NFT Marketplace",
        path: "/",
      },
    ],
  },
  {
    title: "Auctions",
    path: "/auctions",
    subs: [
      {
        title: "Health factor alert list",
        path: "/",
      },
      {
        title: "Auction",
        path: "/",
      },
    ],
  },
];

const Header = () => {
  return (
    <div className="bg-darkNavyBlue">
      <div className="max-w-[1300px] mx-auto px-10 text-[#fff] flex justify-between items-center py-4">
        <span className="text-3xl font-bold">
          <Link href="/">LENDA</Link>
        </span>

        <ul className="flex gap-5 items-center">
          {navItems.map((item, i) => {
            return (
              <div className={`relative ${styles.navContainer}`} key={i}>
                <li className="cursor-pointer flex items-center gap-1 mb-2">
                  <Link href={`${item.path}`}>
                    <span>{item.title}</span>
                  </Link>
                  {item.subs && <FaAngleDown />}
                </li>

                {item.subs && (
                  <div
                    className={`flex flex-col absolute bg-[#7e5bd6] py-2 rounded-md min-w-[170px] hidden ${styles.navDropdown}`}
                  >
                    {item.subs.map((option, i) => (
                      <p
                        key={i}
                        className="hover:bg-navyBlue px-2 cursor-pointer px-3 py-1"
                      >
                        {option.title}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </ul>

        {/* <button className="px-3 py-2 rounded-md bg-[#7e5bd6]">Connect</button> */}
        <CustomBtn />
      </div>
    </div>
  );
};

export default Header;
