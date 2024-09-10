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
        <section className="xl:py-58 w-full bg-[#1B1464] py-12 text-white md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter tracking-widest sm:text-5xl md:text-6xl lg:text-7xl/none">
                  FESIPOP
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Bienvenue au Fesipop, le festival 100% K-pop, qui débarque en
                  France !
                </p>
              </div>
              <div className="space-x-4">
                <Button>Obtenez vos billets</Button>
                <Button variant="outline">Voir la LINE UP</Button>
              </div>
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
        <section className="w-full bg-pink-900 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              La vie du festival
            </h2>
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
                        Profitez de notre nouveau bar situé à côté de la scène
                        principale. Dégustez une sélection de cocktails,
                        mocktails et bières. Tout cela vous attend !
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
                        Profitez de plus de 5000 m² de camping à côté des
                        entrées du festival. Des animations et des cadeaux sont
                        prévus.
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
                        Profitez de notre nouveau bar situé à côté de la scène
                        principale. Dégustez une sélection de cocktails,
                        mocktails et bières. Tout cela vous attend !
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
                    Prévention
                  </p>

                  <p className="text-xl font-bold text-white sm:text-2xl"></p>

                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        Profitez de plus de 5000 m² de camping à côté des
                        entrées du festival. Des animations et des cadeaux sont
                        prévus.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-gray-500">
          © 2023 FestivaApp Inc. All rights reserved.
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
