import Image from "next/image";
import { useEffect, useRef } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { MdElectricalServices } from "react-icons/md";

export default function Home() {
    return (
        <>
            <main className="text-white">
                <div className="h-[1080px] w-full bg-gray-800">
                    <center>
                        <Image
                            src="/lampe.png"
                            alt="Lampe"
                            width="660"
                            height="0"
                            className="item-center"
                        />
                        <div className="text-white uppercase">
                            <p className="text-[160px] font-bold">Lampe Connectée</p>
                            <div className="text-[40px]">
                                <p className="">DM SNT PAR axeno</p>
                                <p className="">2nd GTP</p>
                            </div>
                        </div>
                        <br />
                        <a href="#app">
                            <div className="animate-bounce bg-slate-800 p-2 w-12 h-12 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-500" fill="none" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </div>
                        </a>
                    </center>

                </div>
                <div id="app" className="flex h-[1080px] w-full bg-gray-900">
                    <div className="flex items-center text-center align-middle">
                        <Image
                            src="/telephone.png"
                            alt="Lampe"
                            width="507"
                            height="884"
                            className="items-center text-center align-middle ml-[6%]"
                        />
                    </div>
                    <div className="ml-[160px] mt-[80px] items-center text-center align-middle">
                        <p className="font-bold text-[96px]">APPLICATION MOBILE</p>
                        <p className="mt-[40px] text-4xl font-light">Possibilité de gérer l'éclairage de l'ampoule <br />depuis un téléphone avec l'application Konyks ou <br />Smart Life ou par commandes vocales:</p>
                        <br />
                        <ul className="list-inside list-disc text-4xl font-extralight items-center text-center align-middle">
                            <li>Synchronisation avec la musique.</li>
                            <li>Ambiances préprogrammées.</li>
                            <li>Changement de couleurs.</li>
                            <li>Changement de la luminosité.</li>
                            <li>Automatisation facilement.</li>
                        </ul>
                        <center>
                            <br />
                            <br />
                            <br />
                            <a href="#caracteristique">
                                <div className="animate-bounce bg-slate-800 p-2 w-12 h-12 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
                                </div>
                            </a>
                        </center>
                    </div>
                </div>
                <div className="h-[1080px] w-full bg-gray-800" id="caracteristique">
                    <center>
                        <div className="text-white uppercase">
                            <p className="text-[100px] font-bold">Caracteristique Energétique</p>
                            <div className="flex flex-wrap flex-col justify-center items-center">
                                <p className="flex items-center mr-8 mb-4"><MdElectricalServices className="mr-2" size={157} /> Consommation Energétique: 8.5 watts</p>
                                <p className="flex items-center mr-8 mb-4"><AiOutlineWifi className="mr-2" size={157} /> Capteur Wifi</p>
                            </div>
                        </div>
                    </center>
                </div>
            </main>
            <footer className="bg-gray-900 text-white py-4">
                <div className="text-center">
                    Site fait par <span className="font-bold">Timéo Bavart.</span>
                </div>
            </footer>
        </>
    );
}