import React from 'react';

function created() {
  return (
    <section className="fixed top-0 bottom-0  h-full w-full flex justify-center items-end py-9">
      <a
        href="https://www.instagram.com/manudev.jsx"
        target="_blank"
        className="border-2 px-6 py-2 rounded-full shadow-md bg-zinc-100/60 z-30"
        rel="noreferrer"
      >
        <p className="font-bold text-xs">
          Hecho con mucho <strong className="text-red-500">❤︎</strong> por
          Manuel
        </p>
      </a>
    </section>
  );
}

export default created;
