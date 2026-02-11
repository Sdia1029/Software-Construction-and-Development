import MyCard from '@/components/MyCard';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import React from 'react'

export default function Home() {
  return (
    <div className="text-white bg-[#050522] font-sans">
      {/* SECTION 1  */}
      <div className="min-h-screen flex flex-col">
        <MyCard/>
        <Section2/>
      </div>
      {/*  SERVICES SECTION  */}
      <Section3/>
      {/*  SERVICES SECTION  */}
      <Section4/>
      {/*imgs */}
      <Section5/>
    </div>
  );
}