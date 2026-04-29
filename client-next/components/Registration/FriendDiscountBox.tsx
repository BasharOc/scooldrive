type FriendDiscountBoxProps = {
  bonusData?: {
    forFriend?: {
      aktiv?: boolean;
      rabattmenge?: number;
    };
  } | null;
  explanation: string;
  toggleLabel: string;
  friendNameLabel: string;
  friendNamePlaceholder: string;
  submitButton: string;
  isFriendDiscount: boolean;
  friendName: string;
  isSubmitted: boolean;
  onToggle: (checked: boolean) => void;
  onFriendNameChange: (value: string) => void;
  onMarkSubmitted: () => void;
};

export default function FriendDiscountBox({
  bonusData,
  explanation,
  friendName,
  friendNameLabel,
  friendNamePlaceholder,
  isFriendDiscount,
  isSubmitted,
  onFriendNameChange,
  onMarkSubmitted,
  onToggle,
  submitButton,
  toggleLabel,
}: FriendDiscountBoxProps) {
  if (!bonusData?.forFriend?.aktiv) {
    return null;
  }

  return (
    <div className="mt-6 rounded-lg border bg-gray-50 p-4">
      <p className="mb-4 text-sm text-gray-700">
        {explanation.replace(
          "{rabattmenge}",
          String(bonusData.forFriend.rabattmenge || 0)
        )}
      </p>
      <label className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={isFriendDiscount}
          onChange={(event) => onToggle(event.target.checked)}
          className="h-5 w-5 text-yellow-500"
        />
        <span>{toggleLabel}</span>
      </label>
      {isFriendDiscount ? (
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {friendNameLabel}
          </label>
          <input
            type="text"
            value={friendName}
            onChange={(event) => onFriendNameChange(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm"
            placeholder={friendNamePlaceholder}
          />
        </div>
      ) : null}
      {isFriendDiscount ? (
        <div className="flex gap-4">
          <button
            onClick={onMarkSubmitted}
            disabled={isSubmitted}
            className={`rounded-lg px-4 py-2 font-semibold ${
              isSubmitted
                ? "cursor-not-allowed bg-green-500 text-white"
                : "bg-yellow-500 text-black hover:bg-yellow-600"
            }`}
          >
            {submitButton}
          </button>
        </div>
      ) : null}
    </div>
  );
}
