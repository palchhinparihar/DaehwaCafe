import Accordion from "../components/layout/Accordion.jsx";
import { CardList, Metric, SectionHeading, Surface } from "../components/layout/Ui.jsx";
import { serviceItems, collaborationTargets } from "../data/Partnerships.js";

const WhatWeCanProvide = () => {
  return (
    <section
      id="what-we-can-provide"
      className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(241,232,255,0.95),_transparent_42%),linear-gradient(180deg,_#fffdfd_0%,_#f5eeff_54%,_#efe6ff_100%)] text-stone-900"
    >
      <div className="px-4 sm:px-6 lg:px-8 pt-12">
        {/* Services */}
        <section className="mb-20" data-aos="fade-up">
          <SectionHeading
            badge="Partnership Services"
            title="What We Can Provide"
            accent="Supporting every stage of your event"
            description="From planning and promotion to execution and community engagement, our team is ready to help."
          />

          <div className="mt-10 w-full lg:w-[75%] mx-auto">
            <Accordion
              items={serviceItems.map((service) => ({
                title: service.title,
                content: (
                  <p className="leading-relaxed text-stone-600">
                    {service.description}
                  </p>
                ),
              }))}
            />
          </div>
        </section>

        {/* Collaboration Opportunities */}
        <section
          className="mb-10 border-t border-violet-200/70 pt-12"
          data-aos="fade-up"
        >
          <SectionHeading
            badge="Open for Partnerships"
            title="Collaboration Opportunities"
            accent="Let's build something meaningful together"
            description="We welcome collaborations with organizations that share our passion for education, culture, youth empowerment, and community development."
          />

          <div className="mt-10 bg-white p-6 rounded-3xl">
            <CardList
              className="sm:grid-cols-2 lg:grid-cols-3"
              items={collaborationTargets}
            />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-stone-600">
            Whether you're organizing a cultural festival, educational
            seminar, workshop, student program, or community initiative,
            DAEHWA Cafe is always excited to collaborate and create
            meaningful experiences together.
          </p>
        </section>
      </div>
    </section>
  );
};

export default WhatWeCanProvide;