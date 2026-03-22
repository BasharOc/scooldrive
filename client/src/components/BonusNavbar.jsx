// src/components/BonusTicker.jsx
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import useApiData from "../../hooks/useAPIData";

const bonusContent = {
  DE: {
    forAll: "Spare {amount}€ für alle Kurse, endet in {hours}h",
    forFriend: "Spare {amount}€ bei Freunde-Werbung, endet in {hours}h",
    noBonus: "Keine aktiven Boni verfügbar",
  },
  EN: {
    forAll: "Save {amount}€ on all courses, ends in {hours}h",
    forFriend: "Save {amount}€ with friend referral, ends in {hours}h",
    noBonus: "No active bonuses available",
  },
  AR: {
    forAll: "وفر {amount}€ على جميع الدورات، ينتهي خلال {hours} ساعة",
    forFriend: "وفر {amount}€ مع إحالة صديق، ينتهي خلال {hours} ساعة",
    noBonus: "لا توجد عروض نشطة متاحة",
  },
};

const BonusTicker = () => {
  const { selectedLanguage } = useLanguage();
  const { data: bonusData } = useApiData("bonus");
  const lang = bonusContent[selectedLanguage] || bonusContent.DE;

  // Aktive Boni sammeln
  const getActiveBonusTexts = () => {
    if (!bonusData) return [];

    const texts = [];

    if (bonusData.forAll?.aktiv) {
      const text = lang.forAll
        .replace("{amount}", bonusData.forAll.rabattmenge || 0)
        .replace("{hours}", bonusData.forAll.zeitlimit || 0);
      texts.push(text);
    }

    if (bonusData.forFriend?.aktiv) {
      const text = lang.forFriend
        .replace("{amount}", bonusData.forFriend.rabattmenge || 0)
        .replace("{hours}", bonusData.forFriend.zeitlimit || 0);
      texts.push(text);
    }

    return texts;
  };

  const activeBonusTexts = getActiveBonusTexts();

  // Wenn keine Boni aktiv sind, Component nicht anzeigen
  if (activeBonusTexts.length === 0) {
    return null;
  }

  // Text-String für Animation erstellen (weniger Wiederholungen)
  const singleText = activeBonusTexts.join(" • ");
  const tickerText = Array(4).fill(singleText).join(" • ");

  return (
    <div className="bg-[#F5BB00] text-black h-8 overflow-hidden relative">
      <div className="ticker-wrapper">
        <div className="ticker-content">
          <span className="font-bold">{tickerText}</span>
        </div>
      </div>
      <style>{`
        .ticker-wrapper {
          display: flex;
          height: 100%;
          align-items: center;
        }
        .ticker-content {
          white-space: nowrap;
          animation: moveLeft 30s linear infinite;
          font-size: 14px;
        }
        @keyframes moveLeft {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default BonusTicker;
