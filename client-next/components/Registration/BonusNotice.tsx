import type { ActiveBonus, RegistrationLocaleContent } from "@/components/Registration/types";

type BonusNoticeProps = {
  activeBonus: ActiveBonus;
  content: RegistrationLocaleContent;
};

export default function BonusNotice({ activeBonus, content }: BonusNoticeProps) {
  if (!activeBonus) {
    return null;
  }

  return (
    <div className="flex-shrink-0 rounded-lg bg-yellow-500 px-4 py-2 text-right text-black shadow-md">
      <p className="font-semibold">
        {content.steps.bonus.save.replace(
          "{rabattmenge}",
          String(activeBonus.rabattmenge)
        )}
      </p>
      <p className="text-sm">
        {content.steps.bonus.validUntil.replace(
          "{zeitlimit}",
          String(activeBonus.zeitlimit)
        )}
      </p>
    </div>
  );
}
