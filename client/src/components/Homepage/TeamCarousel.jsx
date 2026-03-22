import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaUser } from "react-icons/fa";
import "./TeamCarousel.css";
import { useLanguage } from "../../contexts/LanguageContext";

const teamContent = {
  DE: {
    header: "DEINE BEIFAHRER UND WEGBEGLEITER",
    members: [
      {
        id: 1,
        name: "Anna Schmidt",
        position: "Assistentin der Geschäftsführung",
        moreInfoLink: "Mehr über Anna Schmidt",
      },
      {
        id: 2,
        name: "Jens Böhme",
        position: "Fahrlehrer",
        moreInfoLink: "Mehr über Jens Böhme",
      },
      {
        id: 3,
        name: "Micha Geest",
        position: "Fahrlehrer",
        moreInfoLink: "Mehr über Micha Geest",
      },
      {
        id: 4,
        name: "Michael Schmidt",
        position: "Fahrlehrer",
        moreInfoLink: "Mehr über Michael Schmidt",
      },
      {
        id: 5,
        name: "Sarah Weber",
        position: "Fahrlehrerin",
        moreInfoLink: "Mehr über Sarah Weber",
      },
      {
        id: 6,
        name: "Tom Müller",
        position: "Fahrlehrer",
        moreInfoLink: "Mehr über Tom Müller",
      },
    ],
  },
  EN: {
    header: "YOUR CO-DRIVERS AND COMPANIONS",
    members: [
      {
        id: 1,
        name: "Anna Schmidt",
        position: "Executive Assistant to CEO",
        moreInfoLink: "Learn more about Anna Schmidt",
      },
      {
        id: 2,
        name: "Jens Böhme",
        position: "Driving Instructor",
        moreInfoLink: "Learn more about Jens Böhme",
      },
      {
        id: 3,
        name: "Micha Geest",
        position: "Driving Instructor",
        moreInfoLink: "Learn more about Micha Geest",
      },
      {
        id: 4,
        name: "Michael Schmidt",
        position: "Driving Instructor",
        moreInfoLink: "Learn more about Michael Schmidt",
      },
      {
        id: 5,
        name: "Sarah Weber",
        position: "Driving Instructor",
        moreInfoLink: "Learn more about Sarah Weber",
      },
      {
        id: 6,
        name: "Tom Müller",
        position: "Driving Instructor",
        moreInfoLink: "Learn more about Tom Müller",
      },
    ],
  },
  AR: {
    header: "سائقوك المرافقون وداعموك",
    members: [
      {
        id: 1,
        name: "آنا شميدت",
        position: "مساعدة تنفيذية للمدير التنفيذي",
        moreInfoLink: "تعرف على المزيد عن آنا شميدت",
      },
      {
        id: 2,
        name: "ينس بوهمي",
        position: "مدرب قيادة",
        moreInfoLink: "تعرف على المزيد عن ينس بوهمي",
      },
      {
        id: 3,
        name: "ميشا جيست",
        position: "مدرب قيادة",
        moreInfoLink: "تعرف على المزيد عن ميشا جيست",
      },
      {
        id: 4,
        name: "مايكل شميدت",
        position: "مدرب قيادة",
        moreInfoLink: "تعرف على المزيد عن مايكل شميدت",
      },
      {
        id: 5,
        name: "سارة ويبر",
        position: "مدربة قيادة",
        moreInfoLink: "تعرف على المزيد عن سارة ويبر",
      },
      {
        id: 6,
        name: "توم مولر",
        position: "مدرب قيادة",
        moreInfoLink: "تعرف على المزيد عن توم مولر",
      },
    ],
  },
};

const TeamCarousel = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { selectedLanguage } = useLanguage();
  const lang = teamContent[selectedLanguage] || teamContent.DE;

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320; // 20rem = 320px
      const gap = 24; // 1.5rem = 24px
      const scrollAmount = cardWidth + gap;

      const currentScroll = scrollRef.current.scrollLeft;
      const newScrollLeft =
        direction === "left"
          ? Math.max(0, currentScroll - scrollAmount)
          : currentScroll + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        checkScrollButtons();
      }, 100);
    }
  };

  const TeamCard = ({ member }) => (
    <div className="team-card">
      <div className="team-card__image-container">
        <div className="team-card__image-placeholder">
          <FaUser />
        </div>
        <div className="team-card__image-overlay" />
      </div>
      <div className="team-card__content">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__position">{member.position}</p>
        <button className="team-card__link">{member.moreInfoLink}</button>
      </div>
    </div>
  );

  return (
    <div className="team-carousel">
      <div className="team-carousel__header">
        <h2 className="team-carousel__title">{lang.header}</h2>
      </div>
      <div className="team-carousel__container">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="team-carousel__nav-button team-carousel__nav-button--left"
          aria-label="Vorherige Team-Mitglieder"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="team-carousel__nav-button team-carousel__nav-button--right"
          aria-label="Nächste Team-Mitglieder"
        >
          <FaChevronRight />
        </button>
        <div
          ref={scrollRef}
          onScroll={checkScrollButtons}
          className="team-carousel__scroll-container"
        >
          <div className="team-carousel__cards-wrapper">
            {lang.members.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
