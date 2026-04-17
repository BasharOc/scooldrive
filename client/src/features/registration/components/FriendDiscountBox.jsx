import React from "react";
import { FaCheck } from "react-icons/fa";

export default function FriendDiscountBox({
  bonusData,
  langContent,
  isFriendDiscount,
  friendName,
  isSubmitted,
  onToggle,
  onFriendNameChange,
  onMarkSubmitted,
}) {
  if (!bonusData?.forFriend?.aktiv) {
    return null;
  }

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
      <p className="text-sm text-gray-700 mb-4">
        {langContent.steps.friendDiscount.explanation.replace(
          "{rabattmenge}",
          bonusData?.forFriend?.rabattmenge || 0
        )}
      </p>
      <label className="flex items-center space-x-2 mb-4">
        <input
          type="checkbox"
          checked={isFriendDiscount}
          onChange={(event) => onToggle(event.target.checked)}
          className="form-checkbox h-5 w-5 text-yellow-500"
        />
        <span>{langContent.steps.friendDiscount.toggleLabel}</span>
      </label>
      {isFriendDiscount && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {langContent.steps.friendDiscount.friendNameLabel}
          </label>
          <input
            type="text"
            value={friendName}
            onChange={(event) => onFriendNameChange(event.target.value)}
            className="form-input w-full border-gray-300 rounded-lg shadow-sm"
            placeholder={
              langContent.steps.friendDiscount.friendNamePlaceholder
            }
          />
        </div>
      )}
      {isFriendDiscount && (
        <div className="flex space-x-4">
          <button
            onClick={onMarkSubmitted}
            disabled={isSubmitted}
            className={`px-4 py-2 rounded-lg font-semibold ${
              isSubmitted
                ? "bg-green-500 text-white cursor-not-allowed"
                : "bg-yellow-500 text-black hover:bg-yellow-600"
            }`}
          >
            {isSubmitted ? (
              <span className="flex items-center space-x-2">
                <FaCheck className="text-white" />
                <span></span>
              </span>
            ) : (
              langContent.steps.friendDiscount.submitButton
            )}
          </button>
        </div>
      )}
    </div>
  );
}

