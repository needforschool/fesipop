"use client";

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

export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Music className="mr-2 h-6 w-6" />
          <span className="font-bold">FestivaApp</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
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
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full bg-black py-12 text-white md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Experience the Ultimate Festival
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Join us for three days of incredible music, art, and
                  community. Get ready for the event of the year!
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Tickets</Button>
                <Button variant="outline">View Lineup</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Festival Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Music className="mb-2 h-8 w-8" />
                  <CardTitle>Multiple Stages</CardTitle>
                  <CardDescription>
                    Experience diverse music genres across our specially curated
                    stages.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="mb-2 h-8 w-8" />
                  <CardTitle>Prime Location</CardTitle>
                  <CardDescription>
                    Set in a beautiful landscape with easy access and ample
                    facilities.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Ticket className="mb-2 h-8 w-8" />
                  <CardTitle>Easy Ticketing</CardTitle>
                  <CardDescription>
                    Secure your spot with our simple and fast ticketing system.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Artists
            </h2>
            <div className="grid gap-6 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Image
                      alt={`Artist ${i}`}
                      className="mb-4 aspect-square w-full rounded-lg object-cover"
                      height="400"
                      src={`/placeholder.svg?height=400&width=400`}
                      width="400"
                    />
                    <h3 className="mb-2 text-lg font-bold">Artist Name</h3>
                    <p className="text-sm text-gray-500">Genre</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button>View Full Lineup</Button>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stay Updated
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest festival news and
                  exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
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
