"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdDirectionsCarFilled,
} from "react-icons/md";
import { FaCreditCard, FaMoneyBills, FaTableList } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import styles from "./sidebar.module.css";

function Sidebar() {
  return (
    <div className="">
      <Disclosure as="nav" >
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-8 w-8"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-bgSoft z-18 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-text text-center cursor-pointer font-bold  border-b border-gray-100 pb-4 w-full">
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt=""
                  width="50"
                  height="50"
                />

                <div className={styles.userDetail}>
                  <span className={styles.username}>Otto</span>
                  <span className={styles.userTitle}>Administrator</span>
                </div>
              </div>
            </h1>
            <div className=" my-2 border-b  border-gray-100 pb-2">
              <div className="flex mb-1 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h2 className="text-sm text-text group-hover:text-white font-semibold ">
                  Dashboard
                </h2>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-sm text-text group-hover:text-white font-semibold ">
                  Usuarios
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaCreditCard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-sm text-text group-hover:text-white font-semibold ">
                  Créditos
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaMoneyBills className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-sm text-text group-hover:text-white font-semibold ">
                  Facturas
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaTableList className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-sm text-text group-hover:text-white font-semibold ">
                  Tablas
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdDirectionsCarFilled className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-sm text-text group-hover:text-white font-semibold ">
                  Vehículos
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-sm text-text group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-sm text-text group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-text group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default Sidebar;

// import React from 'react'
// import Image from "next/image";
// import MenuLink from './menuLink/menuLink';
// import styles from './sidebar.module.css'
// // import { auth, signOut } from "@/app/auth";
// import {
//     MdDashboard,
//     MdSupervisedUserCircle,
//     MdShoppingBag,
//     MdAttachMoney,
//     MdWork,
//     MdAnalytics,
//     MdPeople,
//     MdOutlineSettings,
//     MdHelpCenter,
//     MdLogout,
//   } from "react-icons/md";

// const menuItems = [
//     {
//       title: "Clientes",
//       list: [
//         {
//           title: "Dashboard",
//           path: "/dashboard",
//           icon: <MdDashboard />,
//         },
//         {
//           title: "Usuarios",
//           path: "/dashboard/users",
//           icon: <MdSupervisedUserCircle />,
//         },
//         {
//           title: "Productos",
//           path: "/dashboard/product",
//           icon: <MdShoppingBag />,
//         },
//         {
//           title: "Transacciones",
//           path: "/dashboard/transactions",
//           icon: <MdAttachMoney />,
//         },
//       ],
//     },
//     {
//       title: "Análisis",
//       list: [
//         {
//           title: "Revenue",
//           path: "/dashboard/revenue",
//           icon: <MdWork />,
//         },
//         {
//           title: "Reportes",
//           path: "/dashboard/reports",
//           icon: <MdAnalytics />,
//         },
//         {
//           title: "Equipo",
//           path: "/dashboard/teams",
//           icon: <MdPeople />,
//         },
//       ],
//     },
//     {
//       title: "Perfíl",
//       list: [
//         {
//           title: "Configuración",
//           path: "/dashboard/settings",
//           icon: <MdOutlineSettings />,
//         },
//         {
//           title: "Ayuda",
//           path: "/dashboard/help",
//           icon: <MdHelpCenter />,
//         },
//       ],
//     },
//   ];

// async function Sidebar() {
//     // const { user } = await auth();
//   return (
//     <div className={styles.container}>
//     <div className={styles.user}>

//       <Image
//         className={styles.userImage}
//         src= "/noavatar.png"
//         alt=""
//         width="50"
//         height="50"
//       />

//       <div className={styles.userDetail}>
//         <span className={styles.username}>Otto</span>
//         <span className={styles.userTitle}>Administrator</span>
//       </div>

//     </div>
//     <ul className={styles.list}>
//       {menuItems.map((cat) => (
//         <li key={cat.title}>
//           <span className={styles.cat}>{cat.title}</span>
//           {cat.list.map((item) => (
//             <MenuLink item={item} key={item.title} />
//           ))}
//         </li>
//       ))}
//     </ul>
//     <form
//     //   action={async () => {
//     //     "use server";
//     //     await signOut();
//     //   }}
//     >
//       <button className={styles.logout}>
//         <MdLogout />
//         Logout
//       </button>
//     </form>
//   </div>
//   )
// }

// export default Sidebar
