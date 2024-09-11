import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Music, Ticket } from "lucide-react";

import { Button } from "@acme/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@acme/ui/card";
import { Input } from "@acme/ui/input";

import ArtistCards from "./_components/ArtistCards";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          {/* <Music className="mr-2 h-6 w-6" /> */}
          <Image alt="logo" height="50" src="/logo.png" width="50" />
          <span className="font-bold">FESIPOP</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Lineup
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Tickets
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </Link> */}
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-image1 w-full bg-cover bg-center bg-no-repeat">
          <div className="xl:py-58 bg-black/50 py-12 text-white md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter tracking-widest sm:text-5xl md:text-6xl lg:text-7xl/none">
                    FESIPOP
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                    Bienvenue au Fesipop, le festival 100% K-pop, qui débarque
                    en France !
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>Obtenez vos billets</Button>
                  <Button variant="outline">Voir la LINE UP</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#1B1464] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              La vie du festival
            </h2>
            <p className="text-l mb-12 text-center tracking-tighter">
              Plongez dans l'effervescence du Fesi Pop ! Venez vivre des moments
              magiques et inoubliables, où la musique, la joie et les bonnes
              vibrations se rencontrent. Laissez-vous emporter par l'énergie
              festive et les sourires contagieux. Rejoignez-nous et découvrez
              pourquoi Fesi Pop est l'endroit où il faut être !
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <a href="#" className="group relative block bg-black">
                <Image
                  alt="bar"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  height="1000"
                  src="/bar.jpg"
                  width="1000"
                />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl font-medium uppercase tracking-widest text-pink-200">
                    Notre Nouveau FESIBAR
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl"></p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Profitez de notre tout nouveau bar, situé juste à côté
                        de la scène principale ! Dégustez une sélection
                        délicieuse de cocktails, mocktails et bières
                        rafraîchissantes. Plongez dans une ambiance festive et
                        conviviale, où chaque gorgée est une fête.
                        Rejoignez-nous et laissez-vous tenter par des saveurs
                        exquises et des moments inoubliables !
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className="group relative block bg-black">
                <Image
                  alt="bar"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  height="1000"
                  src="/camping.jpg"
                  width="1000"
                />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl font-medium uppercase tracking-widest text-pink-200">
                    Le Camping
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl"></p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Profitez de plus de 5000 m² de camping juste à côté des
                        entrées du festival ! Des animations palpitantes et des
                        cadeaux surprises vous attendent. Plongez dans une
                        ambiance festive et conviviale, où chaque moment est une
                        aventure. Rejoignez-nous et vivez une expérience
                        inoubliable sous les étoiles !
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="my-6 grid gap-6 lg:grid-cols-2">
              <a href="#" className="group relative block bg-black">
                <Image
                  alt="bar"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  height="1000"
                  src="/scene.jpg"
                  width="1000"
                />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl font-medium uppercase tracking-widest text-pink-200">
                    La nouvelle scène K-STAR
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl"></p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Venez découvrir la toute nouvelle scène K STAR, le
                        nouveau cœur battant du festival Fesipop ! Plongez dans
                        une ambiance festive et vibrante, où la bonne humeur et
                        les bonnes ondes sont au rendez-vous. Ne manquez pas
                        cette occasion unique de vivre des moments inoubliables
                        et de profiter de la musique comme jamais auparavant.
                        Rejoignez-nous et laissez-vous emporter par l'énergie
                        positive de K STAR !
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" className="group relative block bg-black">
                <Image
                  alt="bar"
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  height="1000"
                  src="/shop.jpg"
                  width="1000"
                />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-2xl font-medium uppercase tracking-widest text-pink-200">
                    Boutique
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl"></p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Le Fesipop vous invite à découvrir notre super boutique,
                        spécialement conçue pour vous ! Venez explorer une
                        sélection unique d'articles qui feront briller vos
                        journées. Plongez dans une ambiance festive et
                        laissez-vous tenter par des trésors qui vous feront
                        vibrer. Rejoignez-nous et faites-vous plaisir avec notre
                        super boutique !
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Line up !
            </h2>
            <ArtistCards />
            <div className="mt-10 text-center">
              <Button>Voir la programmation complète</Button>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#12CBC4] py-12 md:py-24 lg:py-32">
          <h2 className="mb-12 text-center text-5xl font-bold text-white">
            Fesi'App ?
          </h2>
          <div className="w-100 container flex">
            <div className="flex w-[50%] justify-center">
              <div className="bg-image2 relative flex h-[620px] w-[350px] justify-center rounded-2xl"></div>
            </div>
            <div className="w-[50%]">
              <div
                className="mx-auto max-w-md overflow-hidden rounded-xl py-6 text-white shadow-md md:max-w-2xl"
                style={{
                  background: "#12CBC4",
                  boxShadow: "13px 13px 54px #07514e,-13px -13px 54px #1dffff",
                }}
              >
                <div className="md:flex">
                  <div className="p-8">
                    <div className="text-sm font-semibold uppercase tracking-wide text-white">
                      Fesi Pop Festival
                    </div>
                    <h2 className="mt-1 block text-lg font-medium leading-tight text-white">
                      Pourquoi télécharger notre application mobile ?
                    </h2>
                    <ul className="mt-2 text-white">
                      <li className="my-2 flex items-center py-1">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3">
                          Des good vibes à chaque instant !
                        </span>
                      </li>
                      <li className="my-2 mt-2 flex items-center py-1">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3">
                          Des notifications goofy pour ne rien manquer !
                        </span>
                      </li>
                      <li className="my-2 mt-2 flex items-center py-1">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3">
                          Une carte d'interaction pour voir les différents
                          événements !
                        </span>
                      </li>
                      <li className="my-2 mt-2 flex items-center py-1">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3">
                          La Line up pour danser toute la nuit !
                        </span>
                      </li>
                      <li className="my-2 mt-2 flex items-center py-1">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3">
                          Des surprises et des cadeaux à gagner !
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-image overflow-hidden bg-cover bg-top bg-no-repeat">
          <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold text-white">
                Pourquoi télécharger l'application Fesipop ?
              </h2>
              <p className="w-50 mt-6 text-white/90">
                Consultez le programme détaillé des concerts, des animations et
                des ateliers pour ne rien manquer.
              </p>
              <p className="w-50 text-white/90">
                Naviguez facilement sur le site du festival grâce à notre carte
                interactive. Trouvez rapidement les scènes, les stands et les
                points d'intérêt.
              </p>

              <div className="mt-4 flex justify-center gap-6 sm:mt-8">
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://apps.apple.com/fesipop"
                    className="flex items-center justify-center rounded-full bg-black px-4 py-2 text-white shadow-md transition duration-300 hover:bg-gray-800"
                  >
                    <span className="font-semibold">
                      Télécharger sur l'App Store
                    </span>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=fesipop"
                    className="flex items-center justify-center rounded-full bg-white px-4 py-2 text-black shadow-md transition duration-300 hover:bg-gray-100"
                  >
                    <span className="font-semibold">
                      Télécharger sur Google Play
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500">
          © 2023 FESIPOP Inc. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
