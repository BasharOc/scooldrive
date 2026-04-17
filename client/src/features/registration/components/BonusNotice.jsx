import React from "react";

export default function BonusNotice({ activeBonus, langContent }) {
  if (!activeBonus) {
    return null;
  }

  return (
    <div className="flex-shrink-0 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md text-right">
      <p className="font-semibold">
        {langContent.steps.bonus.save.replace(
          "{rabattmenge}",
          activeBonus.rabattmenge
        )}
      </p>
      <p className="text-sm">
        {langContent.steps.bonus.validUntil.replace(
          "{zeitlimit}",
          activeBonus.zeitlimit
        )}
      </p>
    </div>
  );
}

