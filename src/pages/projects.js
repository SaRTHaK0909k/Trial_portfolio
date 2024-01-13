import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons/Github";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const projects = () => {
  const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
      <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 md:p-6 lg:p-8">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-3xl bg-dark" />
      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto rounded-lg" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-4 md:pl-6 lg:pl-8">
        <span className="text-primary font-medium text-lg md:text-xl lg:text-2xl">
          {type}
        </span>
        <Link
          href={link}
          className="hover:underline underline-offset-2"
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-2xl md:text-4xl lg:text-5xl font-bold">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-8 h-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg md:text-xl lg:text-2xl font-semibold"
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
    );
  };

  const Project = ({ title, type, img, link, github }) => {
    return (
      <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light p-6 relative">
        <Link
          href={link}
          className="w-full cursor-pointer overflow-hidden rounded-lg mb-4"
          target="_blank"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>
        <div className="w-full flex flex-col items-start justify-between">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            className="hover:underline underline-offset-2"
            target="_blank"
          >
            <h2 className="my-2 text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {title}
            </h2>
          </Link>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-8 h-8">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
              target="_blank"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
    <>
      <Head>
        <title>CodeCents | Projects Page</title>
        <meta name="desription" content="" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* <AnimatedText text="Imagination Trumps Knowledge!"/> */}
          <h2 className="font-bold  text-8xl mb-16 w-full text-center">
            Imagination Trumps Knowledge!
          </h2>
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
