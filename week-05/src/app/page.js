import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-[#050522] text-white font-sans min-h-screen px-6 md:px-20 py-10">

      {/* HEADER / HERO */}
      <section className="text-center mb-10">
        {/* Profile Image */}
        <div className="mx-auto w-40 h-40 rounded-full overflow-hidden mb-4">
          <img src="/img.jpg" alt="Sadia Eman" className="w-full h-full object-cover" />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl font-bold">SADIA EMAN</h1>
        <p className="mt-2 text-gray-300">Aspiring AI & Data Science Enthusiast</p>
        <p className="text-gray-400 mt-1">sadiaeman14@gmail.com | Lahore, Pakistan</p>
      </section>

      {/* SUMMARY */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Summary</h2>
        <p className="text-gray-300">
          I am a Data Science undergraduate with hands-on experience in AI applications, chatbots, automation tools, and data visualizations. Skilled in Python, Machine Learning, NLP, Power BI, and Excel. Actively developing projects to gain real-world experience.
        </p>
      </section>

      {/* SKILLS CARDS */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-gray-800 p-6 rounded-xl text-center">
            <h3 className="font-bold text-xl mb-2">Programming</h3>
            <p>Python, SQL (basic)</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-xl text-center">
            <h3 className="font-bold text-xl mb-2">Libraries</h3>
            <p>Pandas, NumPy, Matplotlib, scikit-learn, NLTK</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-xl text-center">
            <h3 className="font-bold text-xl mb-2">Frameworks & Tools</h3>
            <p>Flask, Power BI, Excel, TagUI, GitHub, PythonAnywhere</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="font-bold">Islamic Chatbot (GenAI + NLP)</h3>
            <p>Interactive chatbot built with Flask and AI to answer Islamic queries conversationally.</p>
          </div>
          <div>
            <h3 className="font-bold">Finance Dashboard + AI Chatbot</h3>
            <p>Power BI dashboard with Python-based AI chatbot to answer financial questions.</p>
          </div>
          <div>
            <h3 className="font-bold">Job Scraper (TagUI + GenAI)</h3>
            <p>Automated job scraping and filtering using TagUI and AI, emails results automatically.</p>
          </div>
          <div>
            <h3 className="font-bold">Sales & Health Dashboards</h3>
            <p>Designed dashboards using Power BI and Excel for data visualization and trend analysis.</p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="text-gray-300 space-y-4">
          <p><strong>BS in Data Science</strong> - Superior University (2023 – Present) | CGPA: 3.76</p>
          <p><strong>FSc – Pre-Medical</strong> - Punjab College (2021 – 2023)</p>
          <p><strong>Matriculation (Science)</strong> - Private Candidate (2019 – 2021)</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-300">Email: sadiaeman14@gmail.com</p>
        <p className="text-gray-300">Location: Lahore, Pakistan</p>
      </section>

    </div>
  );
}