import {createContext, useState} from "react";

export const CategoryContext = createContext([
    { name: "هواتف", img: "/phones.png" },
    { name: "اثاث", img: "/acessriess-home.png" },
    { name: "اجهزة منزلية", img: "/electronic-home.png" },
    { name: "اكسسوارات الكترونية", img: "/electronic-acessress.png" },
    { name: "ملابس", img: "/clothes.png" },
    { name: "عناية شخصية", img: "/for-you.png" },
  ]);