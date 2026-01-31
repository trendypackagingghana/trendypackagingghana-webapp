export default function AlertBar() {
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-amber-50 border border-amber-100 p-3 sm:p-4 rounded-xl">
      <span className="material-symbols-outlined text-amber-500 shrink-0">
        warning
      </span>
      <p className="flex-1 text-xs sm:text-sm font-semibold text-amber-800 leading-snug">
        System Alert: Raw PET Pellet supply is at 15%.
      </p>
      <button className="shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 bg-amber-500 text-white rounded-lg text-[10px] sm:text-xs font-bold whitespace-nowrap">
        Order Now
      </button>
    </div>
  );
}
